import React from "react";
import { IDailyWeather } from "../../../states/redux-store/storeTypes";
import { getDay, convertToCelcius } from "../../../util/Helpers";
import { DailyWeather } from "./DailyWeather";
import { DailyWeatherSkeleton } from "./DailyWeatherSkeleton";
import { TEXT } from "../../../constants";

interface Props {
  isLoading: boolean;
  dailyWeather: Array<IDailyWeather>;
}
export const DailyWeatherDisplay = ({
  isLoading,
  dailyWeather = [],
}: Props) => {
  return (
    <>
      {!isLoading ? (
        <>
          {dailyWeather?.map((daily: IDailyWeather, index: number) => (
            <DailyWeather
              key={index}
              weatherCondition={daily?.weather[0]?.main
                ?.toString()
                ?.toLocaleLowerCase()}
              index={index}
              day={getDay(daily?.dt)?.toString()!}
              temperature={
                convertToCelcius(daily?.temp?.day)?.toString() + TEXT.DegreeSign
              }
            />
          ))}
        </>
      ) : (
        <>
          <DailyWeatherSkeleton />
        </>
      )}
    </>
  );
};
