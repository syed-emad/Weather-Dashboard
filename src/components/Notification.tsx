import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IMAGES } from "../constants";
import { ResponseCodeToIconMap } from "../constants/ImageIconMappings";
import { Heading } from "./titles/Heading";
import { Paragraph } from "./titles/Paragraph";
interface Props {
  message: string;
  code: number;
  show: boolean;
}
export const Notification = ({ message, code, show = false }: Props) => {
  return (
    <>
      <div
        aria-live="assertive"
        className="fixed inset-0  flex items-start pointer-events-none mt-5 mr-8 justify-end z-50 "
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="duration-300 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white rounded-lg shadow px-4 py-5 ">
              <div className="flex item-start items-center space-x-4">
                <img
                  src={ResponseCodeToIconMap[code] ?? IMAGES.no_records}
                  className="w-10 h-10"
                  alt="error"
                />
                <div className="flex flex-col">
                  <Heading text={code?.toString()} />
                  <Paragraph text={message} />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
