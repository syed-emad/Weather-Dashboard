import { SunsetSunrise } from "./SunsetSunrise";
import { SunsetSunriseSkeleton } from "./SunsetSunriseSkeleton";
interface Props {
  isLoading: boolean;
  sunriseTime: string;
  sunsetTime: string;
}
export const SunsetSunriseDisplay = ({
  isLoading,
  sunriseTime,
  sunsetTime,
}: Props) => {
  return (
    <>
      {!isLoading ? (
        <>
          <SunsetSunrise sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
        </>
      ) : (
        <>
          <SunsetSunriseSkeleton />
        </>
      )}
    </>
  );
};

// ;
