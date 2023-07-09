import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { geoDBApi, openWeatherApi } from "../axiosInstances";
import { geoLocationReducer } from "./slice/GeoLocationSlice";
import { notificationReducer } from "./slice/NotificationSlice";

const allReducers = combineReducers({
  geoLocation: geoLocationReducer,
  notification: notificationReducer,
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
