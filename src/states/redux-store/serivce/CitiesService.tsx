import { openWeatherApi } from "../../axiosInstances";

export const getCityWeatherDetail = (
  lat: number,
  lon: number,
  exclude: string,
  appId: string
) => {
  return openWeatherApi.get("/data/3.0//onecall", {
    params: { lat, lon, appId, exclude },
  });
};
export const getCityAirQuality = (lat: number, lon: number, appId: string) => {
  return openWeatherApi.get("/data/2.5/air_pollution", {
    params: { lat, lon, appId },
  });
};
