import { PageWrapper } from "../components/PageWrapper";
import { Heading } from "../components/titles/Heading";
import { HeadingLarge } from "../components/titles/HeadingLarge";
import { Paragraph } from "../components/titles/Paragraph";
import { IMAGES } from "../constants";
import { COLORS } from "../constants/Colors";
import { WeatherIconsMap } from "../constants/ImageIconMappings";
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
  console.log(apiKey, "apiKey");
  const exclude = "hourly,minutely,alerts";
  console.log("long", long);
  console.log("lat", lat);
  const { data: cityWeather } = useGetCityDetail(
    long,
    lat,
    exclude,
    apiKey ?? ""
  );

  console.log("asd", cityWeather);
  return (
    <>
      <PageWrapper>
        <div className="flex mb-10 items-center justify-between bg-white px-8 py-5 rounded-xl">
          <div className="flex space-x-2 items-center" key={1}>
            <img
              src={WeatherIconsMap["clouds"]}
              alt="cloudy"
              className="w-14 h-w-14"
            />
            <HeadingLarge
              text={
                convertToCelcius(cityWeather?.data.current?.temp)?.toString() +
                "C"
              }
            />
          </div>
          <div>
            <p>something</p>
          </div>
          <div className="">
            <HeadingLarge text={getTime(cityWeather?.data?.current?.dt)} />
            <Paragraph
              text={getFormattedDate(cityWeather?.data?.current?.dt)}
            />
          </div>
        </div>
        <Heading text="Daily Forcast" />
        <div className="flex space-x-5">
          <div className="flex space-x-5 w-3/5">
            {cityWeather?.data?.daily?.map((daily: any, index: number) => (
              <div
                className="w-32 py-5 bg-gray-50 shadow-sm flex flex-col space-y-2 items-center justify-center rounded-lg"
                key={index}
              >
                <img
                  src={
                    WeatherIconsMap[
                      daily?.weather[0]?.main?.toString()?.toLocaleLowerCase()
                    ]
                  }
                  alt="cloudy"
                  className="w-14 h-w-14"
                />
                <Paragraph
                  text={getDay(daily?.dt)?.toString()!}
                  colorTheme={COLORS.ThemeBlack}
                />
                <Paragraph
                  text={convertToCelcius(daily?.temp?.day)?.toString()}
                  colorTheme={COLORS.ThemeBlack}
                />
              </div>
            ))}
          </div>
          <div className="w-2/5 bg-white rounded-lg shadow-sm flex justify-between items-center px-5">
            <div className="flex space-x-5  h-full w-fit items-center" key={2}>
              <img src={IMAGES.sunrise} alt="cloudy" className="w-14 h-w-14" />
              <div className="">
                <Paragraph text={"Sunrise"} />
                <HeadingLarge
                  text={getTime(cityWeather?.data?.current?.dt)}
                  color={COLORS.Purple}
                />
              </div>
            </div>
            <div className="flex space-x-2  h-full w-fit items-center" key={31}>
              <img src={IMAGES.sunset} alt="cloudy" className="w-14 h-w-14" />
              <div className="">
                <Paragraph text={"Sunrise"} />
                <HeadingLarge
                  text={getTime(cityWeather?.data?.current?.dt)}
                  color={COLORS.Purple}
                />
              </div>
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
