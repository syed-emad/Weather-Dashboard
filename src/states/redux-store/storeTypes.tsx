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
