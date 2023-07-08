import { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export interface IThunk {
  extra: {
    axios: AxiosInstance;
  };
  rejectValue: AxiosResponse;
}
export interface IRejectValue {
  message?: string;
  code?: string;
  request?: any;
}
