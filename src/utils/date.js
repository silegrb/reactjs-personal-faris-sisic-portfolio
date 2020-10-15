import dayjs from 'dayjs';

export const formatDate = (date, dateFormat = 'DD MMM, YYYY') => dayjs(date).format(dateFormat);
