import dayjs from 'dayjs';

export const getDateTime = (date) => dayjs(date).format('DD/MM/YYYY - HH:mm');

export const getTime = (date) => dayjs(date).format('HH:mm');

export const getDate = (date) => dayjs(date).format('DD/MM/YYYY');

export const getTimestamp = (date) => dayjs(date).valueOf();

export const getDiffYears = (now, pastDate) => {
  const date1 = dayjs(now);
  const date2 = dayjs(pastDate);

  return date1.diff(date2, 'year');
};
