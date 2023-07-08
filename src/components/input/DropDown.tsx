import React, { ChangeEventHandler } from "react";
import { IDropDown } from "../../util/Types";
interface Props {
  list: Array<IDropDown>;
  dropDownKey: string;
  selectedValue: string;
  onChange: (key: string) => ChangeEventHandler<HTMLSelectElement>;
}
export const DropDown = ({
  dropDownKey,
  selectedValue = "0",
  onChange,
  list,
}: Props) => {
  console.log("sleected", selectedValue);
  return (
    <div className="w-full">
      <select
        className="bg-white w-full border-gray-900 border-2 border-opacity-5 rounded-md"
        id={dropDownKey}
        name={dropDownKey}
        defaultValue={selectedValue}
        onChange={onChange(dropDownKey)}
        value={selectedValue}
      >
        <option value={""}> </option>
        {list?.length > 0 &&
          list?.map((item: IDropDown, index: number) => (
            <option value={item.key} key={index}>
              {item.value}
            </option>
          ))}
      </select>
    </div>
  );
};
