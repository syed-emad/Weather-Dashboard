import { PageWrapper } from "../components/PageWrapper";
import { CurrentWeather } from "../components/cityDetail/CurrentWeather";
import { CurrentWeatherSkeleton } from "../components/cityDetail/CurrentWeatherSkeleton";
import { DailyWeather } from "../components/cityDetail/DailyWeather";
import { DailyWeatherSkeleton } from "../components/cityDetail/DailyWeatherSkeleton";
import { SunsetSunrise } from "../components/cityDetail/SunsetSunrise";
import { SunsetSunriseSkeleton } from "../components/cityDetail/SunsetSunriseSkeleton";
import { Heading } from "../components/titles/Heading";
import { useGetCityAirQuality } from "../states/react-query/useGetCityAirQuality";
import { useGetCityDetail } from "../states/react-query/useGetCityDetail";
import {
  convertToCelcius,
  getDay,
  getFormattedDate,
  getTime,
} from "../util/Helpers";
import { useQueryParam } from "../util/useQueryParam";
import {
  IAirQualityData,
  IDailyWeather,
} from "../states/redux-store/storeTypes";
import { AirQualityIndex } from "../components/cityDetail/AirQualityIndex";

export const CityDetail = () => {
  const { getQueryParam } = useQueryParam();
  const long = verifyCordinates(getQueryParam("long"));
  const lat = verifyCordinates(getQueryParam("lat"));
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const exclude = "hourly,minutely,alerts";

  const { data: cityWeather, isLoading: isLoadingWeather } = useGetCityDetail(
    long,
    lat,
    exclude,
    apiKey ?? ""
  );

  const { data: cityAirPollution, isLoading: isLoadingAirQuality } =
    useGetCityAirQuality(long, lat, apiKey ?? "");

  const { list } = cityAirPollution?.data || ({} as IAirQualityData);

  return (
    <>
      <PageWrapper>
        <div className="space-y-5">
          <div className="current-weather">
            {!isLoadingWeather ? (
              <CurrentWeather
                time={getTime(cityWeather?.data?.current?.dt ?? 0)}
                date={getFormattedDate(cityWeather?.data?.current?.dt ?? 0)}
                weather={
                  convertToCelcius(
                    cityWeather?.data.current?.temp ?? 0
                  )?.toString() + "C"
                }
              />
            ) : (
              <CurrentWeatherSkeleton />
            )}
          </div>
          <div id="daily-forcast">
            <div className="mb-2">
              <Heading text="Daily Forcast" />
            </div>
            <div className="flex space-x-5">
              <div className="flex space-x-5 w-3/5">
                {!isLoadingWeather ? (
                  <>
                    {cityWeather?.data?.daily?.map(
                      (daily: IDailyWeather, index: number) => (
                        <DailyWeather
                          key={index}
                          weatherCondition={daily?.weather[0]?.main
                            ?.toString()
                            ?.toLocaleLowerCase()}
                          index={index}
                          day={getDay(daily?.dt)?.toString()!}
                          temperature={convertToCelcius(
                            daily?.temp?.day
                          )?.toString()}
                        />
                      )
                    )}
                  </>
                ) : (
                  <>
                    <DailyWeatherSkeleton />
                  </>
                )}
              </div>
              <div className="w-2/5">
                {!isLoadingWeather ? (
                  <>
                    <SunsetSunrise
                      sunriseTime={getTime(
                        cityWeather?.data?.current?.sunrise ?? 0
                      )}
                      sunsetTime={getTime(
                        cityWeather?.data?.current?.sunset ?? 0
                      )}
                    />
                  </>
                ) : (
                  <>
                    <SunsetSunriseSkeleton />
                  </>
                )}
              </div>
            </div>
          </div>
          <div id="air-quality">
            <Heading text="Air Quality Index" />
            <AirQualityIndex data={list} isLoading={isLoadingAirQuality} />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

const verifyCordinates = (value: string | null) => {
  if (value == null) {
    return 0;
  } else {
    return parseFloat(value);
  }
};
