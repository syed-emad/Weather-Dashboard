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
import { ICitiesFilter } from "../util/Types";
import { CurrentNotification } from "../states/redux-store/slice/NotificationSlice";
import { Notification } from "../components/Notification";
import { useIsOnline } from "../util/useIsOnline";

export const Cities = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState<ICitiesFilter>({} as ICitiesFilter);
  const citiesDetails: any = useSelector(ListOfCities);
  const cities = citiesDetails?.data;
  const paginationData = citiesDetails?.metadata;
  const [curentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const currentNotification = useSelector(CurrentNotification);
  useEffect(() => {
    const fetchCountries = async () => {
      await dispatch(GetCountries({}));
    };
    fetchCountries();
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    const handleInputChangeDebounced = debounce(async () => {
      setIsLoading(true);

      await dispatch(
        GetCitiesLocation({
          namePrefix: search?.searchText,
          countryIds: search?.country,
          offset: curentPage * 10,
          limit: 10,
        })
      );
      setIsLoading(false);
    }, 1000);

    handleInputChangeDebounced();

    return () => {
      handleInputChangeDebounced.cancel();
    };
  }, [search, curentPage, dispatch]);
  return (
    <PageWrapper>
      <Filter search={search} setSearch={setSearch} />

      <CitiesTable
        cities={cities}
        currentPage={curentPage}
        setCurrentPage={setCurrentPage}
        totalPages={paginationData?.totalCount}
        isLoading={isLoading}
      />

      <Notification
        code={currentNotification?.error}
        message={currentNotification?.message}
        show={currentNotification?.show}
      />
    </PageWrapper>
  );
};
