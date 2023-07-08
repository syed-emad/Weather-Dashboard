import React from "react";
import { Heading } from "../components/titles/Heading";
import { Paragraph } from "../components/titles/Paragraph";
import { IMAGES } from "../constants";

export const Home = () => {
  return (
    <div className="h-screen flex ">
      <div className="w-1/2 flex items-center ">
        <div className="pl-10 space-y-5 w-full flex justify-center">
          <div className="flex flex-col  items-center ">
            <img src={IMAGES.main_logo} className="h-20 w-20" alt="main-logo" />
            <Heading text="Welcom to Weatherly" />
            <Paragraph text="See weather details of any city" />
            <button
              type="submit"
              className=" flex justify-center mt-2 py-2 px-4 w-full border border-transparent rounded-md shadow-sm text-lg text-white bg-[#81A9FB] hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      <div
        className="hidden sm:hidden pl-20  pt-32 text-white text-xl lg:block relative w-1/2 space-y-10 flex-1 flex-col bg-[#81A9FB]"
        style={{ backgroundImage: `url(${IMAGES.banner})` }}
      >
        <p className="border-l-2 border-0 pl-4 border-solid">
          City Weather at Your Fingertips:
          <br></br> Explore, Discover, and Plan.
        </p>
      </div>
    </div>
  );
};
