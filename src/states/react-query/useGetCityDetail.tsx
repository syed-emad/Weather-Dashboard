import { useQuery } from "react-query";
import { getCityWeatherDetail } from "../redux-store/serivce/CitiesService";

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
      // enabled: false,
      refetchOnWindowFocus: false,
      onSuccess: async (response: any) => {
        return response.data;
      },
      onError: async (err: any) => {
        return err;
      },
    }
  );
  return { data, isLoading, refetch };
};
