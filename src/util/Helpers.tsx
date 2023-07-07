import { DateTime } from "luxon";
let debounceTimeout: any;
let lastButtonClickTime = 0;
export const debounce = (callback: any, delay: number) => {
  const now = Date.now();
  const timeSinceLastClick = now - lastButtonClickTime;
  lastButtonClickTime = now;
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  console.log("asd", timeSinceLastClick);
  if (timeSinceLastClick > 1000) {
    callback();
  } else {
    debounceTimeout = setTimeout(() => {
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
  return DateTime.fromSeconds(timestamp).weekdayLong;
};
