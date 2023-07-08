import { useQuery } from "react-query";
import { getCityWeatherDetail } from "../redux-store/serivce/CitiesService";
import { ICityWeather } from "../redux-store/storeTypes";

export const useGetCityDetail = (
  long: number,
  lat: number,
  exclude: string,
  appId: string
) => {
  const { data, isLoading, refetch } = useQuery(
    [`getQuestion-${long + lat}`],
    () => getCityWeatherDetail(long, lat, exclude, appId),
    {
      refetchOnWindowFocus: false,
      onSuccess: async (response: ICityWeather) => {
        return response.data;
      },
      onError: async (err: any) => {
        return err;
      },
    }
  );
  return { data, isLoading, refetch };
};
