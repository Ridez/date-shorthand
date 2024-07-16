const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;
const MS_PER_WEEK = MS_PER_DAY * 7;

export const timeConversionUtils = {
  toMilliseconds: {
    seconds: (seconds: number) => seconds * MS_PER_SECOND,
    minutes: (minutes: number) => minutes * MS_PER_MINUTE,
    hours: (hours: number) => hours * MS_PER_HOUR,
    days: (days: number) => days * MS_PER_DAY,
    weeks: (weeks: number) => weeks * MS_PER_WEEK,
  },
};
