import { HeadingLarge } from "../../titles/HeadingLarge";
import { Paragraph } from "../../titles/Paragraph";

export const CurrentWeatherSkeleton = () => {
  return (
    <div className="animate-pulse first-letter:flex mb-10 items-center justify-between bg-white px-8 py-5 rounded-xl">
      <div className="  flex space-x-2 items-center" key={1}>
        <div className="w-14 h-14"></div>
        <HeadingLarge text={""} />
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <HeadingLarge text={""} />
        <Paragraph text={""} />
      </div>
    </div>
  );
};
