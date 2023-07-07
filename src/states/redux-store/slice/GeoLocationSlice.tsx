import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IThunk } from "../../storeTypes";
import { getCitiesList } from "../serivce/GeoLocationService";
interface GeoLocationState {}
const initialState: GeoLocationState = {};

export const GetCitiesLocation = createAsyncThunk<
  any,
  { countryIds: string; namePrefix: string; limit: number; offset: number },
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
    // builder.addCase();
  },
});

export const geoLocationReducer = geoLocationSlice.reducer;
