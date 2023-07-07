import React from "react";
interface Props {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: Props) => {
  return (
    <>
      <div className={"h-screen overflow-x-hidden flex flex-col bg-[#F0F5FF]"}>
        <div className={"flex-grow px-5 mt-5"}>{children}</div>
      </div>
    </>
  );
};
