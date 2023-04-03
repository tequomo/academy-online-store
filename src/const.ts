export const RESULTS_ITEMS_PER_PAGE = 7;

const MILLISECONDS_IN_SECOND = 1000;
const DAYS_IN_WEEK = 7;
const DAYS_IN_YEAR = 365;
const HOURS_IN_DAY = 24;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_DAY = 86400;
export const MILLISECONDS_IN_DAY = SECONDS_IN_DAY * MILLISECONDS_IN_SECOND;
export const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * DAYS_IN_WEEK;
export const MILLISECONDS_IN_YEAR = MILLISECONDS_IN_DAY * DAYS_IN_YEAR;

const months = [
  `января`,
  `февраля`,
  `марта`,
  `апреля`,
  `мая`,
  `июня`,
  `июля`,
  `августа`,
  `сентября`,
  `октября`,
  `ноября`,
  `декабря`,
];

const days = {
  1: `день`,
  2: `дня`,
  3: `дня`,
  4: `дня`,
  5: `дней`,
  6: `дней`,
  7: `дней`,
};
