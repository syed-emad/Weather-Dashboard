import { Heading } from "../titles/Heading";

export const DailyWeatherSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div
          className="animate-pulse w-40 py-5  bg-white shadow-sm flex flex-col space-y-2 items-center justify-center rounded-lg"
          key={index}
        >
          <div className="w-20 h-28">
            <Heading text={""} />
          </div>
          <Heading text={""} />
          <Heading text={""} />
        </div>
      ))}
    </>
  );
};
