import { AxiosInstance, AxiosResponse } from "axios";
import { AppDispatch } from "./store";

export interface IThunk {
  extra: {
    axios: AxiosInstance;
  };
  rejectValue: AxiosResponse;
  dispatch: AppDispatch;
}
export interface IRejectValue {
  message?: string;
  code?: string;
  request?: any;
}

export interface IRapidAPIRejectValue {
  errors?: Array<IRapidApIErrorObj>;
  message?: string;
}

export interface IRapidApIErrorObj {
  code: string;
  message: string;
}

export interface IAirQuality {
  data: IAirQualityData;
}

export interface IAirQualityData {
  coord: ICoordinate;
  list: Array<IAirQualityListDetails>;
}

interface ICoordinate {
  lon: number;
  lat: number;
}

export interface IAirQualityListDetails {
  main: IAirQualityMain;
  components: IAirQualityComponents;
}

export interface IAirQualityMain {
  aqi: number;
}
export interface IAirQualityComponents {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

interface IDailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
}

interface ICityWeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  daily: Array<IDailyWeather>;
}

export interface ICityWeather {
  data: ICityWeatherData;
}
