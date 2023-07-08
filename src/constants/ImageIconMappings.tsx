import { IMAGES } from "./Images";

export const WeatherIconsMap: {
  [key: string]: string;
} = {
  clouds: IMAGES.weather_cloudy,
  rain: IMAGES.weather_rain,
  clear: IMAGES.clear,
  default: IMAGES.weather_cloudy,
};

export const ResponseCodeToIconMap: {
  [key: number]: string;
} = {
  401: IMAGES.no_records,
  200: IMAGES.no_records,
};
