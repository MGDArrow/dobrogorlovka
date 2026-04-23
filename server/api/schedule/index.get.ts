import dayjs from 'dayjs';
import { IWashingDate } from '~/types/types';
import {
  deleteDatesToEnd,
  deleteDatesToStart,
  getDateForSchedule,
  getTimeForSchedule,
  initDaysj,
  isCurrentHoliday,
} from '~/utils/day';
import prisma from '~/utils/prisma';

interface ICurrentSchedule {
  id: number;
  effectiveFrom: Date;
  timetableData: { [key: string]: string[] };
  createdAt: Date;
  updatedAt: Date;
}
interface IHoliday {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  date: Date;
}

const weekdays = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const first = query.first as string;
  const last = query.last as string;
  const washTypeIdsParam = query.washTypeIdsParam as string;
  let selectedWashTypeIds: number[] | undefined;
  if (washTypeIdsParam) {
    selectedWashTypeIds = washTypeIdsParam
      .split(',')
      .map((id) => parseInt(id.trim(), 10))
      .filter((id) => !isNaN(id));
  }

  const [currentSchedule, upcomingSchedules, holidays, orders, washTypesData] =
    await Promise.all([
      prisma.schedule.findFirst({
        where: {
          effectiveFrom: {
            lte: first,
          },
        },
        orderBy: {
          effectiveFrom: 'desc',
        },
      }),
      prisma.schedule.findMany({
        where: {
          AND: [
            {
              effectiveFrom: {
                gte: first,
              },
            },
            {
              effectiveFrom: {
                lte: last,
              },
            },
          ],
        },
        orderBy: {
          effectiveFrom: 'asc',
        },
      }),
      prisma.holiday.findMany({
        where: {
          AND: [
            {
              date: {
                gte: first,
              },
            },
            {
              date: {
                lte: last,
              },
            },
          ],
        },
        orderBy: {
          date: 'asc',
        },
      }),
      prisma.order.findMany({
        where: {
          scheduledAt: {
            gte: first,
            lte: last,
          },
        },
        include: {
          washTypes: {
            select: {
              washTypeId: true,
            },
          },
        },
      }),
      prisma.washType.findMany({
        where: { isActive: true },
        select: { id: true, machineCount: true },
      }),
    ]);

  let allSchedule = getCurrentScheludeDays(
    currentSchedule as ICurrentSchedule | null,
    first,
  );

  upcomingSchedules.forEach((el) => {
    allSchedule = getUpcomingScheludeDays(
      allSchedule,
      el as ICurrentSchedule,
      first,
    );
  });

  const scheduleWithFree = getFreeObjects(allSchedule);
  const machineCountMap = new Map(
    washTypesData.map((wt) => [wt.id, wt.machineCount]),
  );

  getScheludeWithoutHolidays(scheduleWithFree, holidays);
  getScheludeWithoutOldDates(scheduleWithFree);
  filterByOrders(
    scheduleWithFree,
    orders,
    selectedWashTypeIds || [],
    machineCountMap,
  );

  return scheduleWithFree;
});

function getCurrentScheludeDays(
  current: ICurrentSchedule | null,
  first: string,
) {
  if (current === null) return [];

  const days = Object.entries(current.timetableData);

  const dateTimes: string[] = [];

  days.forEach((day) => {
    const date = getDateForSchedule(
      initDaysj(first),
      weekdays.findIndex((d) => d === day[0]),
    );
    day[1].forEach((time) => {
      dateTimes.push(getTimeForSchedule(date, time).toISOString());
    });
  });
  return dateTimes;
}

function getUpcomingScheludeDays(
  dates: string[],
  upcomingSchedule: ICurrentSchedule,
  first: string,
) {
  // 1. Составить подобное расписание
  const newDates = getCurrentScheludeDays(upcomingSchedule, first);
  // 2. Удалить все даты в новом расписании перед Efectivs
  const newDatesWithDelete = deleteDatesToStart(
    newDates,
    upcomingSchedule.effectiveFrom,
  );
  // 3. Удалить все даты после Efectiv в dates
  const datesWithDelete = deleteDatesToEnd(
    dates,
    upcomingSchedule.effectiveFrom,
  );
  // 4. Concat

  return [...datesWithDelete, ...newDatesWithDelete];
}

function getFreeObjects(dates: string[]) {
  const array: IWashingDate[] = [];
  dates.forEach((el) =>
    array.push({
      date: el,
      isFree: true,
    }),
  );
  return array;
}

function getScheludeWithoutHolidays(
  dates: IWashingDate[],
  holidays: IHoliday[],
) {
  holidays.forEach((holiday) => {
    dates.map(
      (date) => (date.isFree = !isCurrentHoliday(date.date, holiday.date)),
    );
  });
}

function getScheludeWithoutOldDates(dates: IWashingDate[]) {
  const today = dayjs(new Date());
  dates.map(
    (date) =>
      (date.isFree = date.isFree ? dayjs(date.date).isAfter(today) : false),
  );
}

function filterByOrders(
  dates: IWashingDate[],
  orders: Array<{
    scheduledAt: Date;
    washTypes: { washTypeId: number }[];
  }>,
  selectedWashTypeIds: number[],
  machineCountMap: Map<number, number>,
) {
  if (!selectedWashTypeIds.length) {
    dates.forEach((date) => {
      date.isFree = false;
    });
    return;
  }
  dates.forEach((date) => {
    if (!date.isFree) return;

    const dateTimeStr = dayjs(date.date).toISOString();
    const ordersAtSlot = orders.filter(
      (order) => order.scheduledAt.toISOString() === dateTimeStr,
    );

    let allTypesHaveFreeMachine = true;
    for (const washTypeId of selectedWashTypeIds) {
      const machineCount = machineCountMap.get(washTypeId) ?? 1;
      const bookedCount = ordersAtSlot.filter((order) =>
        order.washTypes.some((wt) => wt.washTypeId === washTypeId),
      ).length;
      if (bookedCount >= machineCount) {
        allTypesHaveFreeMachine = false;
        break;
      }
    }
    date.isFree = allTypesHaveFreeMachine;
  });
}
