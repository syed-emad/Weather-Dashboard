import { COLORS } from "../../../constants/Colors";
import { WeatherIconsMap } from "../../../constants/ImageIconMappings";
import { Heading } from "../../titles/Heading";
interface Props {
  weatherCondition: string;
  index: number;
  day: string;
  temperature: string;
}
export const DailyWeather = ({
  weatherCondition,
  index,
  day,
  temperature,
}: Props) => {
  return (
    <div
      className="w-32 py-5 bg-gray-50 shadow-sm flex flex-col space-y-2 items-center justify-center rounded-lg"
      key={index}
    >
      <img
        src={WeatherIconsMap[weatherCondition]}
        alt="cloudy"
        className="w-14 h-w-14"
      />
      <Heading text={day} colorTheme={COLORS.ThemeBlack} />
      <Heading text={temperature} colorTheme={COLORS.ThemeBlack} />
    </div>
  );
};
