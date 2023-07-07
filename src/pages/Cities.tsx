import { useDispatch } from "react-redux";
import { PageWrapper } from "../components/PageWrapper";
import { CitiesTable } from "../components/cities/CitiesTable";
import { Filter } from "../components/input/Filter";
import { AppDispatch } from "../states/redux-store/store";
import { GetCitiesLocation } from "../states/redux-store/slice/GeoLocationSlice";
import { useEffect, useState } from "react";

export const Cities = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState<string>("");
  const fetchCities = async () => {
    await dispatch(GetCitiesLocation({}));
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <PageWrapper>
      <Filter search={search} setSearch={setSearch} />
      <CitiesTable />
    </PageWrapper>
  );
};
