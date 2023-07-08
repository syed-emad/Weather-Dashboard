import React from "react";
import { classNames } from "../../util/Helpers";
interface Props {
  colorTheme?: string;
  text: string;
}
export const Paragraph = ({ colorTheme, text }: Props) => {
  return (
    <p
      className={classNames(
        "font-normal ",
        colorTheme ? colorTheme : "text-gray-700"
      )}
    >
      {text}
    </p>
  );
};
