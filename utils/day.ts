import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import weekday from 'dayjs/plugin/weekday';
dayjs.locale('ru');
dayjs.extend(weekday);

export function initDaysj(date: Date) {
  return dayjs(date);
}

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

export function formatToWeek(date: Dayjs) {
  const first = dayjs(date).weekday(0);
  const last = dayjs(date).weekday(6);
  const fd = 'DD MMMM';
  return first.format(fd) + ' — ' + last.format(fd);
}

export function weekPlus(date: Dayjs) {
  return dayjs(date).add(1, 'week');
}

export function weekMinus(date: Dayjs) {
  return dayjs(date).subtract(1, 'week');
}

export function getDatesInWeek(date: Dayjs) {
  return [
    dayjs(date).weekday(0),
    dayjs(date).weekday(2),
    dayjs(date).weekday(4),
  ];
}

export function isDateCurrent(date1: Dayjs, date2: Dayjs) {
  return date1.isSame(date2, 'day');
}

export function setTimeInDate(date: Dayjs, time: string) {
  const [hours, minutes] = time.split(':');
  return date.set('hour', +hours).set('minute', +minutes).set('second', 0);
}

export function isTimeCurrent(time: string, date: Dayjs) {
  const newDate = setTimeInDate(date, time);
  return newDate.isSame(date, 'minute');
}
