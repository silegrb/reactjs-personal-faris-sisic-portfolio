import dayjs from 'dayjs';

export const formatDate = (date, dateFormat = 'D MMM, YYYY') => dayjs(date).format(dateFormat);

export const getNumberOfYears = () => {
  const numberOfYears = new Date().getFullYear() - 1998;
  if (new Date().getMonth() < 8
      || (new Date().getMonth() === 8
          && new Date().getDate() < 24)) { return numberOfYears - 1; }
  return numberOfYears;
};
