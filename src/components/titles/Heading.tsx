import React from "react";
import { classNames } from "../../util/Helpers";
interface Props {
  colorTheme?: string;
  text: string;
}
export const Heading = ({ text, colorTheme }: Props) => {
  return (
    <div
      className={classNames(
        "font-medium ",
        colorTheme ? colorTheme : "text-gray-700"
      )}
    >
      {text}
    </div>
  );
};
