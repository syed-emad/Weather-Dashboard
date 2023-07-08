import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRapidAPIRejectValue, IThunk, Testing } from "../storeTypes";
import { getCitiesList, getCountriesList } from "../serivce/GeoLocationService";
import { RootState } from "../store";
import { IDropDown, INotification } from "../../../util/Types";
import { AxiosError } from "axios";
import { ShowNotification } from "./NotificationSlice";
interface GeoLocationState {
  cities: Array<any>;
  countries: Array<IDropDown>;
}
const initialState: GeoLocationState = {
  cities: {} as Array<any>,
  countries: {} as Array<IDropDown>,
};

export const GetCitiesLocation = createAsyncThunk<
  any,
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
      return response;
    } catch (err: AxiosError | unknown) {
      let error: AxiosError<IRapidAPIRejectValue> =
        err as AxiosError<IRapidAPIRejectValue>;
      let notification: INotification = {
        error: error.response?.status ?? 401,
        message:
          error.response?.data.errors[0].message.toString() ??
          "Some Error Occured",
        show: true,
      };
      dispatch(ShowNotification({ notification }));
      if (!error.response) throw err;
      return rejectWithValue(error.response);
    }
  }
);

export const GetCountries = createAsyncThunk<any, {}, IThunk>(
  "/countries/all",
  async () => {
    try {
      const response = await getCountriesList();
      return response;
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
        state.cities = payload?.data;
      })
      .addCase(GetCountries.fulfilled, (state, action) => {
        const { payload } = action;
        const data = payload?.data;
        const result = data?.map((country: any) => ({
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
