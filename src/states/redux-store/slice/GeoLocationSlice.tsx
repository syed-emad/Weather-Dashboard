import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ICityData,
  ICountry,
  IRapidAPIRejectValue,
  IThunk,
} from "../storeTypes";
import { getCitiesList, getCountriesList } from "../serivce/GeoLocationService";
import { RootState } from "../store";
import { IDropDown, INotification } from "../../../util/Types";
import { AxiosError } from "axios";
import { ShowNotification } from "./NotificationSlice";
interface GeoLocationState {
  cities: ICityData;
  countries: Array<IDropDown>;
}
const initialState: GeoLocationState = {
  cities: {} as ICityData,
  countries: {} as Array<IDropDown>,
};

const getMessageFromErrorResponse = (responseData: IRapidAPIRejectValue) => {
  //Not Efficient
  //geo location api returns different objects on error
  //so its difficult to define fixed types
  //2 most common error cases handled
  let message = "";

  if (responseData?.message != null) {
    message = responseData.message;
  }
  if (
    responseData?.errors?.length != null &&
    responseData?.errors?.length > 0
  ) {
    message = responseData?.errors[0].message + " Please clear filter";
  }
  return message;
};
export const GetCitiesLocation = createAsyncThunk<
  ICityData,
  { countryIds?: string; namePrefix?: string; limit?: number; offset?: number },
  IThunk
>(
  "location/cities",
  async (
    { countryIds, namePrefix, limit, offset },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await getCitiesList(
        countryIds,
        namePrefix,
        limit,
        offset
      );
      return response.data;
    } catch (err: AxiosError | unknown) {
      let error: AxiosError<IRapidAPIRejectValue> =
        err as AxiosError<IRapidAPIRejectValue>;

      let responseData = error?.response?.data;
      let message = "";
      if (responseData === undefined) {
        message = "some error";
      } else {
        message = getMessageFromErrorResponse(responseData);
      }

      let notification: INotification = {
        error: error.response?.status ?? 401,
        message: message ?? "Some Error Occured",
        show: true,
      };

      dispatch(ShowNotification({ notification }));
      if (!error.response) throw err;
      return rejectWithValue(error.response);
    }
  }
);

export const GetCountries = createAsyncThunk<Array<ICountry>, {}, IThunk>(
  "/countries/all",
  async () => {
    try {
      const response = await getCountriesList();
      return response.data;
    } catch (e) {}
  }
);
const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCitiesLocation.fulfilled, (state, action) => {
        const { payload } = action;
        state.cities = payload;
      })
      .addCase(GetCountries.fulfilled, (state, action) => {
        const { payload } = action;
        const data = payload;
        const result = data?.map((country: ICountry) => ({
          key: country?.cca2,
          value: country?.name?.common,
        }));
        state.countries = result;
      });
  },
});

export const ListOfCities = (state: RootState) => state.geoLocation.cities;
export const ListOfCountries = (state: RootState) =>
  state.geoLocation.countries;
export const geoLocationReducer = geoLocationSlice.reducer;
