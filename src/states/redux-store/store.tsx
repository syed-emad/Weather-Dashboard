import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { citiesReducer } from "./slice/CitiesSlice";
import { geoDBApi, openWeatherApi } from "../axiosInstances";
import { AxiosRequestConfig } from "axios";
import { geoLocationReducer } from "./slice/GeoLocationSlice";

const allReducers = combineReducers({
  cities: citiesReducer,
  geoLocation: geoLocationReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { axios: openWeatherApi, axios1: geoDBApi },
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
