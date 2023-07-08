import React from "react";
import { IMAGES } from "../../constants";
import { Heading } from "../titles/Heading";
import { Paragraph } from "../titles/Paragraph";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate();
  const hanldeNavigate = () => {
    navigate("/cities");
  };
  return (
    <div className="w-1/2 flex items-center ">
      <div className="pl-10 space-y-5 w-full flex justify-center">
        <div className="flex flex-col  items-center ">
          <img src={IMAGES.main_logo} className="h-20 w-20" alt="main-logo" />
          <Heading text="Welcom to Weatherly" />
          <Paragraph text="See weather details of any city" />
          <button
            type="submit"
            className=" flex justify-center mt-2 py-2 px-4 w-full border border-transparent rounded-md shadow-sm text-lg text-white bg-[#81A9FB] hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={hanldeNavigate}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
