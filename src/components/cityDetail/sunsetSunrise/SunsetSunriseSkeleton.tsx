import { HeadingLarge } from "../../titles/HeadingLarge";
import { Paragraph } from "../../titles/Paragraph";

export const SunsetSunriseSkeleton = () => {
  return (
    <div className="animate-pulse w-full bg-white rounded-lg shadow-sm flex justify-between items-center px-5 h-full">
      <div className="flex space-x-5  h-full w-fit items-center" key={2}>
        <div className="w-14 h-w-14"></div>
        <div className="">
          <Paragraph text={""} />
          <HeadingLarge text={""} />
        </div>
      </div>
      <div className="flex space-x-2  h-full w-fit items-center" key={31}>
        <div className="w-14 h-w-14"></div>
        <div className="">
          <Paragraph text={""} />
          <HeadingLarge text={""} />
        </div>
      </div>
    </div>
  );
};
