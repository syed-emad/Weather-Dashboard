import React from "react";
import { IMAGES } from "../../constants";

export const Banner = () => {
  return (
    <div
      className="hidden pl-20 pt-32 text-white text-xl  md:block  relative md:w-1/2 space-y-10 flex-1 flex-col bg-[#81A9FB]"
      style={{
        backgroundImage: `url(${IMAGES.banner})`,
      }}
    >
      <p className="border-l-2 border-0 pl-4 border-solid">
        City Weather at Your Fingertips:
        <br></br> Explore, Discover, and Plan.
      </p>
    </div>
  );
};
