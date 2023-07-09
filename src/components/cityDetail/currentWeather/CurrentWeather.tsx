import { WeatherIconsMap } from "../../../constants/ImageIconMappings";
import { HeadingLarge } from "../../titles/HeadingLarge";
import { Paragraph } from "../../titles/Paragraph";
interface Props {
  time: string;
  date: string;
  weather: string;
}
export const CurrentWeather = ({ time, date, weather }: Props) => {
  return (
    <>
      <div className="flex mb-10 items-center justify-between bg-white sm:px-8 py-5 px-2 rounded-xl flex-col sm:flex-row">
        <div className="flex space-x-2 items-center" key={1}>
          <img src={WeatherIconsMap["clouds"]} alt="cloudy" className="w-14" />
          <HeadingLarge text={weather} />
        </div>

        <div>
          <HeadingLarge text={time} />
          <Paragraph text={date} />
        </div>
      </div>
    </>
  );
};
