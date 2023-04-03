import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_WEEK, MILLISECONDS_IN_YEAR } from "./const";

export const formatPrice = (price: number): string => price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0, })

export const formatDate = (date: string | undefined): string => {
  const currentDate = new Date().getTime();
  const diff = date !== undefined ? currentDate - +date : 0;
  // const diff = date !== undefined ? new Date(date) : new Date(currentDate);;
  const dif = new Date(diff);
  return dif.toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const exportDate = (date: string | undefined) => {
  const currentDate = new Date().getTime();
  const diff = date !== undefined ? currentDate - +date : 0;
  if (date !== undefined) {
    console.log(new Date());
    // return `${date.toLocaleString('ru-RU', { hour: 'numeric'})} назад`;
  }
  if (MILLISECONDS_IN_DAY < diff && diff < MILLISECONDS_IN_WEEK) {
    return 0
  }
  if (MILLISECONDS_IN_WEEK < diff && diff < MILLISECONDS_IN_YEAR) {
    return 0
  }
  // return date.toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
}
