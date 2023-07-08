import React, { useEffect } from "react";
import { Heading } from "../components/titles/Heading";
import { Paragraph } from "../components/titles/Paragraph";
import { IMAGES } from "../constants";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import {
  GetCountries,
  GetCitiesLocation,
} from "../states/redux-store/slice/GeoLocationSlice";
import { AppDispatch } from "../states/redux-store/store";
import { Banner } from "../components/home/Banner";
import { Detail } from "../components/home/Detail";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchCountries = async () => {
      await dispatch(GetCountries({}));
    };
    fetchCountries();
  }, [dispatch]);

  useEffect(() => {
    const handleInputChangeDebounced = debounce(async () => {
      await dispatch(GetCitiesLocation({ limit: 10 }));
    }, 1000);

    handleInputChangeDebounced();

    return () => {
      handleInputChangeDebounced.cancel();
    };
  }, []);
  return (
    <div className="h-screen flex ">
      <Detail />
      <Banner />
    </div>
  );
};
