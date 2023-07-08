import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "../components/Notification";
import { PageWrapper } from "../components/PageWrapper";
import { CitiesTable } from "../components/cities/CitiesTable";
import { Filter } from "../components/cities/Filter";
import {
  GetCitiesLocation,
  ListOfCities,
} from "../states/redux-store/slice/GeoLocationSlice";
import { CurrentNotification } from "../states/redux-store/slice/NotificationSlice";
import { AppDispatch } from "../states/redux-store/store";
import { ICityData } from "../states/redux-store/storeTypes";
import { ICitiesFilter } from "../util/Types";
import { useQueryParam } from "../util/useQueryParam";

export const Cities = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { getQueryParam } = useQueryParam();
  const searchParam = getQueryParam("search");
  const [search, setSearch] = useState<ICitiesFilter>({
    searchText: searchParam ?? "",
  } as ICitiesFilter);
  const citiesDetails: ICityData = useSelector(ListOfCities);
  const cities = citiesDetails?.data;
  const paginationData = citiesDetails?.metadata;
  const [curentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentNotification = useSelector(CurrentNotification);

  const fethCities = useMemo(
    () =>
      debounce(async (event: ICitiesFilter) => {
        setIsLoading(true);

        await dispatch(
          GetCitiesLocation({
            namePrefix: event?.searchText,
            countryIds: event?.country,
            offset: curentPage * 10,
            limit: 10,
          })
        );
        setIsLoading(false);
      }, 1000),
    [curentPage, dispatch]
  );

  const changeHandler = (event: ICitiesFilter) => {
    console.log("i am here", event);
    appendSearchToUrl(event);
    setSearch(event);
    fethCities(event);
  };

  const appendSearchToUrl = (event: ICitiesFilter) => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append("search", event.searchText);
    const newURL = `${window.location.pathname}?${urlSearchParams.toString()}`;
    console.log("newURL", newURL);
    window.history.pushState(null, "", newURL);
  };
  const handleClearSearch = async () => {
    setSearch((prevState: ICitiesFilter) => {
      return { ...prevState, searchText: "", country: "" };
    });
    appendSearchToUrl({ searchText: "", country: "" });
    await dispatch(
      GetCitiesLocation({
        namePrefix: "",
        countryIds: "",
        offset: curentPage * 10,
        limit: 10,
      })
    );
  };

  useEffect(() => {
    return () => {
      fethCities.cancel();
    };
  }, [fethCities]);
  return (
    <PageWrapper>
      <Filter
        search={search}
        handleSearch={changeHandler}
        setSearch={setSearch}
        clearSearch={handleClearSearch}
      />
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
        show={currentNotification?.show ?? false}
      />
    </PageWrapper>
  );
};
