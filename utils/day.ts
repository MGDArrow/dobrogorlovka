import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import weekday from 'dayjs/plugin/weekday.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';
import isBetween from 'dayjs/plugin/isBetween.js';
dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export function initDaysj(date: Date | string) {
  return dayjs(date).millisecond(0).second(0).minute(0).hour(0);
}

export function isInRange(
  date: Dayjs,
  first: Dayjs,
  last: Dayjs,
  type: '()' | '[]' | '[)' | '(]',
) {
  return dayjs(date).isBetween(first, last, null, type);
}

export function isBeforeCurrent(date: Dayjs) {
  const current = initDaysj(new Date());
  const first = dayjs(current).weekday(0);
  return dayjs(date).isBefore(first);
}

// Пульс Добра
export function getDateForAnonse(dateStart: Date, dateEnd: Date) {
  const start = dayjs(dateStart);
  const end = dayjs(dateEnd);
  if (start.isSame(end)) return `${start.format('DD/MM/YYYY')}`;
  return `${start.format('DD/MM/YYYY')} — ${end.format('DD/MM/YYYY')}`;
}

export function formatInInput(date: Dayjs) {
  return dayjs(date).format('YYYY-MM-DD');
}

export function formatOutInput(date: string) {
  return dayjs(date, 'YYYY-MM-DD');
}

// Стирка Добра
export function getMondayAndSunday(date: Dayjs): [Dayjs, Dayjs] {
  return [
    dayjs(date).locale('ru').weekday(0),
    dayjs(date).locale('ru').weekday(6),
  ];
}

export function isCurrentWeek(date: Dayjs) {
  const current = initDaysj(new Date());
  const [first, last] = getMondayAndSunday(current);
  return isInRange(date, first, last, '[]');
}

export function formatWeekRange(date: Dayjs) {
  const [first, last] = getMondayAndSunday(date);
  const fd = 'DD MMMM';
  return first.format(fd) + ' — ' + last.format(fd);
}

export function formatTime(date: string) {
  return dayjs(date).format('HH:mm');
}

export function formatDateOrder(date: string) {
  return dayjs(date).format('DD.MM.YYYY');
}

export function changeWeek(date: Dayjs, inc: 1 | -1) {
  return dayjs(date).add(inc, 'week');
}

export function getDateForQuerryGet(dates: [Dayjs, Dayjs]) {
  return {
    first: dates[0].toISOString(),
    last: dates[1].toISOString(),
  };
}

export function getDateForSchedule(date: string, weekdayNum: number) {
  return dayjs(date).weekday(weekdayNum);
}

export function getTimeForSchedule(date: Dayjs, time: string) {
  return date
    .set('hour', +time.split(':')[0])
    .set('minute', +time.split(':')[1]);
}

export function deleteDatesToStart(dates: string[], effectiveFrom: Date) {
  const effectiveFromDayjs = dayjs(effectiveFrom);
  return dates.filter((date) => dayjs(date).isSameOrAfter(effectiveFromDayjs));
}
export function deleteDatesToEnd(dates: string[], effectiveFrom: Date) {
  const effectiveFromDayjs = dayjs(effectiveFrom);
  return dates.filter((date) => dayjs(date).isBefore(effectiveFromDayjs));
}
export function isCurrentHoliday(date: string, holiday: Date) {
  const dateD = dayjs(date);
  const holidayD = dayjs(holiday);
  return dateD.isSame(holidayD, 'day');
}

export function getShortDate(date: string) {
  return dayjs(date).format('YYYYMMDD/DD.MM/dddd');
}
