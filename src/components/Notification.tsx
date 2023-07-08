import React from "react";
interface Props {
  message: string;
  code: number;
}
export const Notification = ({ message, code }: Props) => {
  return (
    <>
      <div className="w-24 h-11 bg-slate-300 shadow ">
        <p>hello</p>
      </div>
    </>
  );
};
