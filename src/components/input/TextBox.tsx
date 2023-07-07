import React from "react";
interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  inputKey: string;
}
export const TextBox = ({ onChange, value, inputKey }: Props) => {
  return (
    <>
      <input
        id={inputKey}
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Type something"
        className="w-full border-gray-900 border02 border-opacity-5 rounded-lg focus:border-blue-400"
      />
    </>
  );
};
