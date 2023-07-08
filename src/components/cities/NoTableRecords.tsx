import React from "react";
import { IMAGES } from "../../constants";
import { Heading } from "../titles/Heading";

export const NoTableRecords = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={IMAGES.no_records}
        className="h-16 w-1h-16 transition duration-150 hover:scale-110"
        alt="No records found"
      />
      <Heading text="No records found" />
    </div>
  );
};
