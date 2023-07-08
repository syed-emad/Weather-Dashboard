import { ChangeEvent } from "react";
import { TextBox } from "../input/TextBox";
import { DropDown } from "../input/DropDown";
import { Heading } from "../titles/Heading";
import { useSelector } from "react-redux";
import { ListOfCountries } from "../../states/redux-store/slice/GeoLocationSlice";
import { ICitiesFilter, IDropDown } from "../../util/Types";
import { classNames } from "../../util/Helpers";
interface Props {
  search: ICitiesFilter;
  handleSearch: (prevState: ICitiesFilter) => void;
  clearSearch: () => void;
}
export const Filter = ({
  search,
  handleSearch,

  clearSearch,
}: Props) => {
  const CountriesList: Array<IDropDown> = useSelector(ListOfCountries);

  const handleInputChange =
    (key: string) =>
    (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      let value = evt.target.value;
      let result = { ...search, [key]: value };

      handleSearch(result);
    };

  const cleatFilter = () => {
    clearSearch();
  };
  console.log("heeelo", search);
  return (
    <div className="flex items-center space-x-2 w-full p-6 mb-5 shadow-sm bg-white rouded-md ">
      <div className="w-3/6">
        <Heading text="Search" />
        <TextBox
          value={search.searchText}
          inputKey="searchText"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-2/6">
        <Heading text="Country" />
        <DropDown
          dropDownKey="country"
          selectedValue={search?.country?.length > 1 ? search.country : ""}
          list={CountriesList}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-1/6 mt-6">
        <button
          className={classNames(
            "flex justify-center py-2 px-4 w-full h-10 border border-transparent rounded-md shadow-sm text-sm font-medium text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500",
            " bg-rose-700 hover:bg-rose-800"
          )}
          onClick={cleatFilter}
          // di sabled={search?.country?.length > 1 ? false : true}
        >
          Clear Fitler
        </button>
      </div>
    </div>
  );
};
