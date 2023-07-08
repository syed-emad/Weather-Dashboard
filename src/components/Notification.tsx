import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IMAGES } from "../constants";
import { ResponseCodeToIconMap } from "../constants/ImageIconMappings";
interface Props {
  message: string;
  code: number;
  show: boolean;
}
export const Notification = ({ message, code, show }: Props) => {
  return (
    <>
      <div aria-live="assertive" className=" ">
        <div className="fixed inset-0 flex items-start mt-5 mr-2 justify-end ">
          <Transition
            show={show}
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
          >
            <div className="max-w-sm w-full bg-white rounded-lg shadow px-4 py-5 ">
              <div className="flex item-start items-center space-x-2">
                <img
                  src={ResponseCodeToIconMap[code] ?? IMAGES.no_records}
                  className="w-10 h-10"
                  alt="error"
                />
                <p>{message}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
