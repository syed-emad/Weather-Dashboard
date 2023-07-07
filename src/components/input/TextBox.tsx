import React, { ChangeEventHandler } from "react";
interface Props {
  onChange: (key: string) => ChangeEventHandler<HTMLInputElement>;
  value: string;
  inputKey: string;
}
export const TextBox = ({ onChange, value, inputKey }: Props) => {
  return (
    <>
      <input
        id={inputKey}
        onChange={onChange(inputKey)}
        value={value}
        type="text"
        className="w-full border-gray-900 border02 border-opacity-5 rounded-lg focus:border-blue-400"
      />
    </>
  );
};
