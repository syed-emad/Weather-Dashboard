import { PageWrapper } from "../components/PageWrapper";
import { AirQualityStat } from "../components/cityDetail/AirQualityStat";
import { CurrentWeather } from "../components/cityDetail/CurrentWeather";
import { CurrentWeatherSkeleton } from "../components/cityDetail/CurrentWeatherSkeleton";
import { DailyWeather } from "../components/cityDetail/DailyWeather";
import { DailyWeatherSkeleton } from "../components/cityDetail/DailyWeatherSkeleton";
import { SunsetSunrise } from "../components/cityDetail/SunsetSunrise";
import { SunsetSunriseSkeleton } from "../components/cityDetail/SunsetSunriseSkeleton";
import { Heading } from "../components/titles/Heading";
import { Paragraph } from "../components/titles/Paragraph";
import { IMAGES } from "../constants";
import { COLORS } from "../constants/Colors";
import { useGetCityDetail } from "../states/react-query/useGetCityDetail";
import {
  convertToCelcius,
  getDay,
  getFormattedDate,
  getTime,
} from "../util/Helpers";
import { useQueryParam } from "../util/useQueryParam";

export const CityDetail = () => {
  const { getQueryParam } = useQueryParam();
  const long = verifyCordinates(getQueryParam("long"));
  const lat = verifyCordinates(getQueryParam("lat"));
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const exclude = "hourly,minutely,alerts";

  const { data: cityWeather, isLoading } = useGetCityDetail(
    long,
    lat,
    exclude,
    apiKey ?? ""
  );

  console.log("asd", cityWeather);
  return (
    <>
      <PageWrapper>
        <div className="space-y-5">
          <div className="current-weather">
            {!isLoading ? (
              <CurrentWeather
                time={getTime(cityWeather?.data?.current?.dt)}
                date={getFormattedDate(cityWeather?.data?.current?.dt)}
                weather={
                  convertToCelcius(
                    cityWeather?.data.current?.temp
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
                {!isLoading ? (
                  <>
                    {cityWeather?.data?.daily?.map(
                      (daily: any, index: number) => (
                        <DailyWeather
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
                {!isLoading ? (
                  <>
                    <SunsetSunrise
                      sunriseTime={getTime(cityWeather?.data?.current?.sunrise)}
                      sunsetTime={getTime(cityWeather?.data?.current?.sunset)}
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
          <div id="air-quality" className="d">
            <Heading text="Air Quality Index" />
            <div className="w-2/4 shadow-sm bg-white rounded-md p-6 space-y-3">
              <div className="flex space-x-3 ">
                <img src={IMAGES.wind} className="w-14 h-14" alt="wind" />
                <div className="flex flex-col">
                  <Heading text="Good" />
                  <Paragraph text="A good day to walk!" />
                </div>
              </div>
              <AirQualityStat value="10" unit="PM2" />
            </div>
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
