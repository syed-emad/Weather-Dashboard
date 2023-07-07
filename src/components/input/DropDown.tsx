import React, { ChangeEventHandler } from "react";
interface Props {
  list: Array<any>;
  dropDownKey: string;
  selectedValue: string;
  onChange: (key: string) => ChangeEventHandler<HTMLSelectElement>;
}
export const DropDown = ({
  dropDownKey,
  selectedValue,
  onChange,
  list,
}: Props) => {
  return (
    <div className="w-full">
      <select
        className="bg-white w-full border-gray-900 border-2 border-opacity-5 rounded-md"
        id={dropDownKey}
        defaultValue={selectedValue}
        onChange={onChange(dropDownKey)}
      >
        <option value={`-1`}></option>
        <option value={`0`}>All</option>
        {list?.length > 0 &&
          list?.map((item: any, index: number) => (
            <option value={item.value} key={index}>
              {item.value}
            </option>
          ))}
      </select>
    </div>
  );
};
