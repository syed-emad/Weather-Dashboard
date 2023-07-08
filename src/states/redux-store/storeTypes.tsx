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
