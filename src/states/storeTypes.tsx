import { AxiosInstance } from "axios";

export interface IThunk {
  extra: {
    axios: AxiosInstance;
  };
  rejectValue: IRejectValue;
}
export interface IRejectValue {
  error: APIError;
  [property: string]: any;
}
export interface APIError {
  code: number;
  details: Array<{ message: string; field: string }>;
  message: string;
  type: string;
}
