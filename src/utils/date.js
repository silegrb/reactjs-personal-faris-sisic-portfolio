import dayjs from 'dayjs';

export const formatDate = (date, dateFormat = 'D MMM, YYYY') => dayjs(date).format(dateFormat);
