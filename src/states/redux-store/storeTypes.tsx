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
