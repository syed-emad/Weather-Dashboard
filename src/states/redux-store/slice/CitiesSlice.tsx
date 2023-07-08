import { createSlice } from "@reduxjs/toolkit";

interface CitiesState {}
const initialState: CitiesState = {};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const citiesReducer = citiesSlice.reducer;
