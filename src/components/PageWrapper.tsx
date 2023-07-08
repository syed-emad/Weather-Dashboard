import React from "react";
import { useIsOnline } from "../util/useIsOnline";
import { Notification } from "./Notification";
import Footer from "./Footer";
import { Header } from "./Header";
interface Props {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: Props) => {
  const isOnline = useIsOnline();
  return (
    <>
      <div
        className={
          "h-screen overflow-x-hidden flex flex-col bg-blue-50 bg-opacity-50"
        }
      >
        <Header />
        <div className={"flex-grow px-8  mt-5"}>
          {children}
          {
            <Notification
              code={401}
              message={"You are offline"}
              show={!isOnline ?? false}
            />
          }
        </div>
        <Footer />
      </div>
    </>
  );
};
