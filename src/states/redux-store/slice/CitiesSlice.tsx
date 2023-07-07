import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IThunk } from "../storeTypes";
import { getCityWeatherDetail } from "../serivce/CitiesService";

interface CitiesState {}
const initialState: CitiesState = {};

export const GetCityWeatherDetails = createAsyncThunk<
  any,
  { lat: number; long: number; exclude: string; appId: string },
  IThunk
>(
  "city/weather",
  async ({ lat, long, exclude, appId }, { rejectWithValue }) => {
    try {
      const response = await getCityWeatherDetail(lat, long, exclude, appId);
      console.log("hhh", response);
      return response;
    } catch (e) {}
  }
);

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCityWeatherDetails.fulfilled, (state, action) => {});
  },
});

export const citiesReducer = citiesSlice.reducer;
