import { useLocation } from "react-router-dom";

export const useQueryParam = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getQueryParam = (param: string) => searchParams.get(param);

  return { getQueryParam };
};
