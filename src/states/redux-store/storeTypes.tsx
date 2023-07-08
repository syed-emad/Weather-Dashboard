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

export interface Testing {
  error: IRapidAPIRejectValue;
}
export interface IRapidAPIRejectValue {
  errors: Array<IRapidApIErrorObj>;
}

export interface IRapidApIErrorObj {
  code: string;
  message: string;
}
