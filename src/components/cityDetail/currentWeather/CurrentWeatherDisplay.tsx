import { CurrentWeather } from "./CurrentWeather";
import { CurrentWeatherSkeleton } from "./CurrentWeatherSkeleton";
interface Props {
  isLoading: boolean;
  time: string;
  date: string;
  weather: string;
}
export const CurrentWeatherDisplay = ({
  isLoading,
  time,
  date,
  weather,
}: Props) => {
  return (
    <>
      {!isLoading ? (
        <CurrentWeather time={time} date={date} weather={weather} />
      ) : (
        <CurrentWeatherSkeleton />
      )}
    </>
  );
};
