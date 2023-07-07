import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IThunk } from "../storeTypes";
import { getCitiesList, getCountriesList } from "../serivce/GeoLocationService";
import { RootState } from "../store";
interface GeoLocationState {
  cities: Array<any>;
  countries: Array<any>;
}
const initialState: GeoLocationState = {
  cities: {} as Array<any>,
  countries: {} as Array<any>,
};

export const GetCitiesLocation = createAsyncThunk<
  any,
  { countryIds?: string; namePrefix?: string; limit?: number; offset?: number },
  IThunk
>("location/cities", async ({ countryIds, namePrefix, limit, offset }) => {
  try {
    const response = await getCitiesList(countryIds, namePrefix, limit, offset);
    return response;
  } catch (e) {}
});

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
        const data = payload.data;
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
