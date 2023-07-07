import { useDispatch } from "react-redux";
import "./App.css";
import { AppDispatch } from "./states/redux-store/store";
import { GetCityWeatherDetails } from "./states/redux-store/slice/CitiesSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { GetCitiesLocation } from "./states/redux-store/slice/GeoLocationSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const hanldeTest = async () => {
    //   const resp = await dispatch(
    //     GetCityWeatherDetails({
    //       lat: 32.86666667,
    //       long: 74.13333333,
    //       exclude: "hourly,minutely,alerts",
    //       appId: "5acf6dff9b1b03a7d116c1269b17607f",
    //     })
    //   );
    //   console.log(unwrapResult(resp));
    // };
    const resp = await dispatch(
      GetCitiesLocation({
        countryIds: "PK",
        namePrefix: "North",
        limit: 10,
        offset: 0,
      })
    );
    console.log(unwrapResult(resp));
  };
  return (
    <>
      <h1 className=" text-3xl font-bold underline text-pink-400">
        Hello world!
      </h1>
      <button onClick={hanldeTest}>click</button>
    </>
  );
}

export default App;
