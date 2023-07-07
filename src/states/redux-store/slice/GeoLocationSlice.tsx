import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IThunk } from "../storeTypes";
import { getCitiesList } from "../serivce/GeoLocationService";
import { RootState } from "../store";
interface GeoLocationState {
  cities: Array<any>;
}
const initialState: GeoLocationState = { cities: {} as Array<any> };

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
const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCitiesLocation.fulfilled, (state, action) => {
      const { payload } = action;
      state.cities = payload.data;
    });
  },
});

export const ListOfCities = (state: RootState) => state.geoLocation.cities;
export const geoLocationReducer = geoLocationSlice.reducer;
