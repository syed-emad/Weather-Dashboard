import { useDispatch, useSelector } from "react-redux";
import { PageWrapper } from "../components/PageWrapper";
import { CitiesTable } from "../components/cities/CitiesTable";
import { Filter } from "../components/cities/Filter";
import { AppDispatch } from "../states/redux-store/store";
import {
  GetCitiesLocation,
  GetCountries,
  ListOfCities,
} from "../states/redux-store/slice/GeoLocationSlice";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

export const Cities = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState<string>("");
  const citiesDetails: any = useSelector(ListOfCities);
  const cities = citiesDetails?.data;
  const paginationData = citiesDetails?.metadata;
  const [curentPage, setCurrentPage] = useState(0);
  console.log(citiesDetails, search, curentPage);

  const fetchCountries = async () => {
    await dispatch(GetCountries({}));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const handleInputChangeDebounced = debounce(async () => {
      await dispatch(
        GetCitiesLocation({
          namePrefix: search,
          offset: curentPage * 10,
          limit: 10,
        })
      );
    }, 1000);

    handleInputChangeDebounced();
    return () => {
      handleInputChangeDebounced.cancel();
    };
  }, [search, curentPage]);
  return (
    <PageWrapper>
      <Filter search={search} setSearch={setSearch} />
      <CitiesTable
        cities={cities}
        currentPage={curentPage}
        setCurrentPage={setCurrentPage}
        totalPages={paginationData?.totalCount}
      />
    </PageWrapper>
  );
};
