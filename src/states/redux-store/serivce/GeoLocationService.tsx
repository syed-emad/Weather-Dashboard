import { geoDBApi } from "../../axiosInstances";

export const getCitiesList = (
  countryIds: string,
  namePrefix: string,
  limit: number,
  offset: number
) => {
  return geoDBApi.get("/cities", {
    params: { countryIds, namePrefix, limit, offset },
  });
};
