import { useQuery } from "react-query";
import { getCityAirQuality } from "../redux-store/serivce/CitiesService";
import { IAirQuality } from "../redux-store/storeTypes";

export const useGetCityAirQuality = (
  long: number,
  lat: number,

  appId: string
) => {
  const { data, isLoading } = useQuery(
    [`getAirPollution-${long + lat}`],
    () => getCityAirQuality(lat, long, appId),
    {
      refetchOnWindowFocus: false,
      onSuccess: async (response: IAirQuality) => {
        return response.data;
      },
      onError: async (err: any) => {
        return err;
      },
    }
  );
  return { data, isLoading };
};
