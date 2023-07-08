import { IMAGES } from "../../constants";
import { COLORS } from "../../constants/Colors";
import { HeadingLarge } from "../titles/HeadingLarge";
import { Paragraph } from "../titles/Paragraph";
interface Props {
  sunsetTime: string;
  sunriseTime: string;
}
export const SunsetSunrise = ({
  sunriseTime = "00:00 AM",
  sunsetTime = "00:00 PM",
}: Props) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm flex justify-between items-center px-5 h-full">
      <div className="flex space-x-5  h-full w-fit items-center" key={2}>
        <img src={IMAGES.sunrise} alt="cloudy" className="w-14 h-w-14" />
        <div className="">
          <Paragraph text={"Sunrise"} />
          <HeadingLarge text={sunriseTime} color={COLORS.Purple} />
        </div>
      </div>
      <div className="flex space-x-2  h-full w-fit items-center" key={31}>
        <img src={IMAGES.sunset} alt="cloudy" className="w-14 h-w-14" />
        <div className="">
          <Paragraph text={"Sunrise"} />
          <HeadingLarge text={sunsetTime} color={COLORS.Purple} />
        </div>
      </div>
    </div>
  );
};
