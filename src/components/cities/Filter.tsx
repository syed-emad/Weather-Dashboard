import { ChangeEvent } from "react";
import { TextBox } from "../input/TextBox";
import { DropDown } from "../input/DropDown";
import { Heading } from "../titles/Heading";
interface Props {
  search: string;
  setSearch: (search: string) => void;
}
export const Filter = ({ search, setSearch }: Props) => {
  const hanldeTextBoxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };

  const handleDropDownChange =
    (key: string) => (evt: ChangeEvent<HTMLSelectElement>) => {};
  return (
    <div className="flex space-x-2 w-full p-6 mb-5 shadow-sm bg-white rouded-md">
      <div className="w-3/4">
        <Heading text="Search" />
        <TextBox
          value={search}
          inputKey="search"
          onChange={hanldeTextBoxChange}
        />
      </div>
      <div className="w-1/4">
        <Heading text="Country" />
        <DropDown
          dropDownKey="emd"
          selectedValue="something"
          list={[""]}
          onChange={handleDropDownChange}
        />
      </div>
    </div>
  );
};
