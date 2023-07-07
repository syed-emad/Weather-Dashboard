import { DateTime } from "luxon";
let debounceTimeout: any;
let lastButtonClickTime = 0;
export const debounce2 = (callback: any, delay: number) => {
  const now = Date.now();
  const timeSinceLastClick = now - lastButtonClickTime;
  lastButtonClickTime = now;
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  console.log("asd", timeSinceLastClick);
  if (timeSinceLastClick > 1000) {
    console.log("calling callback directly");
    callback();
  } else {
    debounceTimeout = setTimeout(() => {
      console.log("calling callback wth time out", delay);
      callback();
      debounceTimeout = null;
    }, delay);
  }
};

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
