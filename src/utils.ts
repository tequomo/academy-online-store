export const formatPrice = (price: number): string => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', minimumFractionDigits: 0,})

export const formatDate = (date: string | undefined): string => {
  const currentDate = new Date().getTime();
  const diff = date !== undefined ? currentDate - +date : 0;
  // const diff = date !== undefined ? new Date(date) : new Date(currentDate);;
  const dif = new Date(diff);
  return dif.toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'})
}

export const exportDate = (date: string) => {
  const currentDate = new Date().getTime();
  switch (date) {
    case value:

      break;

    default:
      break;
  }
}
