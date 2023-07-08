import React from "react";
import { COLORS } from "../../constants/Colors";
import { Heading } from "../titles/Heading";
import { Paragraph } from "../titles/Paragraph";
interface Props {
  value: string;
  unit: string;
}
export const AirQualityStat = ({ value, unit }: Props) => {
  return (
    <div className="bg-[#F0FFF6] w-20 h-28 flex items-center justify-center shadow-sm rounded-md">
      <div className="flex flex-col space-y-2 ">
        <Heading text="9.3" colorTheme={COLORS.Green} />
        <Paragraph text="PM2" colorTheme={COLORS.Green} />
      </div>
    </div>
  );
};
