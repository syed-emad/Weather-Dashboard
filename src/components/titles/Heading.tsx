import React from "react";
interface Props {
  text: string;
}
export const Heading = ({ text }: Props) => {
  return <div className="font-medium mb-2">{text}</div>;
};
