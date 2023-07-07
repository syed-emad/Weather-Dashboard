import { ChangeEvent } from "react";
import { TextBox } from "../input/TextBox";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}
export const Filter = ({ search, setSearch }: Props) => {
  const hanldeTextBoxChange =
    (key: string) => (evt: ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="w-full p-6 mb-5 shadow-sm bg-white rouded-md">
      <TextBox value="test" inputKey="search" onChange={hanldeTextBoxChange} />
    </div>
  );
};
