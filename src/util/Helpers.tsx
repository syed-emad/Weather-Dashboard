import { DateTime } from "luxon";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const convertToCelcius = (temperatureInKelvin: number) => {
  return Math.round(temperatureInKelvin - 273.15);
};

export const getDay = (timestamp: number) => {
  if (timestamp === null || timestamp === undefined) return "";
  return DateTime.fromSeconds(timestamp).weekdayLong;
};

export const getTime = (timeStamp: number) => {
  if (timeStamp === null || timeStamp === undefined) return "";
  return DateTime.fromSeconds(timeStamp).toFormat("h:mm a");
};

export const getFormattedDate = (timeStamp: number) => {
  if (timeStamp === null || timeStamp === undefined) return "";
  return DateTime.fromSeconds(timeStamp).toFormat("dd MMMM EEE yyyy");
};
