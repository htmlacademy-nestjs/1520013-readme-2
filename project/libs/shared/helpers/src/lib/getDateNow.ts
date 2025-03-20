import dayjs = require('dayjs');

export const getDateNow = (): string => {
  return dayjs().format('YYYY-MM-DD');
};
