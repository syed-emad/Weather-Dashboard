import React from "react";
import { Heading } from "../titles/Heading";
import { Paragraph } from "../titles/Paragraph";

export const AirQualitySkeleton = () => {
  return (
    <div className="animate-pulse w-2/4 shadow-sm bg-white rounded-lg p-6 space-y-3">
      <div className="flex space-x-3 ">
        <div className="w-48 rounded-lg h-14 bg-gray-100"></div>
        <div className="flex flex-col">
          <Heading text={""} />
          <Paragraph text={""} />
        </div>
      </div>

      <div className="flex space-x-5">
        <>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              className="animate-pulse w-40   bg-gray-100 shadow-sm flex flex-col space-y-2 items-center justify-center rounded-lg"
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
      </div>
    </div>
  );
};
