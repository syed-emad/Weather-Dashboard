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
        "font-semibold ",
        colorTheme ? colorTheme : "text-gray-700"
      )}
    >
      {text}
    </p>
  );
};
