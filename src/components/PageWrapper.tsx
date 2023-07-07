import React from "react";
interface Props {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: Props) => {
  return (
    <>
      <div className={"h-screen overflow-x-hidden flex flex-col bg-gray-50"}>
        <div className={"flex-grow px-4 mt-5"}>{children}</div>
      </div>
    </>
  );
};
