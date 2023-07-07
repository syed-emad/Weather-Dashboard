import { PageWrapper } from "../components/PageWrapper";
import { Paragraph } from "../components/titles/Paragraph";
import { IMAGES } from "../constants";
import { COLORS } from "../constants/Colors";
import { useGetCityDetail } from "../states/react-query/useGetCityDetail";
import { convertToCelcius, getDay } from "../util/Helpers";
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
  console.log("asd", cityWeather?.data);
  return (
    <>
      <PageWrapper>
        <div>CityDetail</div>
        <div className="flex space-x-5">
          {cityWeather?.data?.daily?.map((daily: any) => (
            <div className="w-32 py-5 bg-gray-50 shadow-sm flex flex-col space-y-2 items-center justify-center rounded-lg ">
              <img
                src={IMAGES.weather_cloudy}
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
