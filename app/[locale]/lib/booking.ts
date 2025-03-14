import { FlatDetails } from "../flats/types";

export function calcDayCount(dateFrom: Date, dateTo: Date): number {
  const dayCountMS = dateTo.getTime() - dateFrom.getTime();
  return Math.ceil(dayCountMS / (24 * 3600 * 1000));
}

export function calcTotalPrice(flat: FlatDetails, dayCount: number) {
  return +flat.price * dayCount;
}

export function isValidDate(date: Date) {
  return !isNaN(date.getTime());
}
