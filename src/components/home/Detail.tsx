import { useState } from "react";
import { IMAGES } from "../../constants";
import { Heading } from "../titles/Heading";
import { Paragraph } from "../titles/Paragraph";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GetCountries,
  GetCitiesLocation,
} from "../../states/redux-store/slice/GeoLocationSlice";
import { AppDispatch } from "../../states/redux-store/store";

export const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchCountries = async () => {
    await dispatch(GetCountries({}));
  };
  const getCities = async () => {
    await dispatch(GetCitiesLocation({ limit: 10 }));
  };

  const hanldeNavigate = async () => {
    setIsLoading(true);
    await fetchCountries();
    await getCities();
    setIsLoading(false);
    navigate("/cities");
  };
  return (
    <div className="w-1/2 flex items-center ">
      <div className="pl-10 space-y-5 w-full flex justify-center">
        <div className="flex flex-col  items-center ">
          <img
            src={IMAGES.main_logo}
            className="h-20 w-20 mb-4"
            alt="main-logo"
          />
          <Heading text="Welcome to Weatherly" />
          <Paragraph text="See weather details of any city" />
          <button
            type="submit"
            className=" flex justify-center mt-2 py-2 px-4 w-full border border-transparent rounded-md shadow-sm text-lg text-white bg-[#81A9FB] hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={hanldeNavigate}
          >
            {isLoading && (
              <img
                src={IMAGES.loading}
                alt="loading"
                className="h-6 w-6 animate-spin mr-2"
              />
            )}
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
