import React from "react";
import { useIsOnline } from "../util/useIsOnline";
import { Notification } from "./Notification";
interface Props {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: Props) => {
  const isOnline = useIsOnline();
  return (
    <>
      <div className={"h-screen overflow-x-hidden flex flex-col bg-[#F0F5FF]"}>
        <div className={"flex-grow px-5 mt-5"}>
          {children}
          {
            <Notification
              code={401}
              message={"You are offline"}
              show={!isOnline ?? false}
            />
          }
        </div>
      </div>
    </>
  );
};
