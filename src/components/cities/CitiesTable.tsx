import { useState } from "react";
import { Pagination } from "../Pagination";
import { GetCitiesLocation } from "../../states/redux-store/slice/GeoLocationSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../states/redux-store/store";
import { debounce } from "../../util";

interface Props {
  cities: any;
  paginationData?: any;
}
const headings = ["City", "Country", "Region", "Population"];

export const CitiesTable = ({ cities, paginationData }: Props) => {
  const [curentPage, setCurrentPage] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const handlePageChange = (page: any) => {
    debounce(async () => {
      var selectedPage = page?.selected;
      setCurrentPage(selectedPage);
      await dispatch(
        GetCitiesLocation({ offset: selectedPage * 10, limit: 10 })
      );
      console.log(selectedPage);
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden shadow rounded-lg bg-pink-100 ">
        <table className="w-full divide-y divide-gray-200 border-solid">
          <thead className="bg-gray-100  ">
            <tr>
              {headings?.map((heading, index: number) => (
                <th
                  scope="col"
                  className="py-4 pl-4 text-left text-sm font-semibold text-gray-900"
                  key={index}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {cities?.length &&
              cities?.map((city: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50" onClick={() => {}}>
                  <td className="py-4 pl-4 text-sm text-gray-700">
                    {city.name}
                  </td>
                  <td>{city.country}</td>
                  <td>{city.region}</td>
                  <td>{city.population}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center py-3 bg-gray-50 sm:px-6">
          <Pagination
            totalPages={10}
            currentPage={curentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
