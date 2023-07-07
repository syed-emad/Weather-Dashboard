import { openWeatherApi } from "../../axiosInstances";

export const getCityWeatherDetail = (
  lat: number,
  lon: number,
  exclude: string,
  appId: string
) => {
  return openWeatherApi.get("/onecall", {
    params: { lat, lon, appId, exclude },
  });
};
