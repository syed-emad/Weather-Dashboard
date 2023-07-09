import { Pagination } from "../Pagination";
import { useNavigate } from "react-router-dom";
import { CitiesTableSkeleton } from "./CitiesTableSkeleton";
import { NoTableRecords } from "./NoTableRecords";
import { ICity } from "../../states/redux-store/storeTypes";

interface Props {
  cities: Array<ICity>;
  currentPage: number;
  hanldePageChange: (page: number) => void;
  totalPages: number;
  isLoading: boolean;
}
const headings = ["City", "Country", "Region", "Population"];

export const CitiesTable = ({
  cities,
  currentPage,
  hanldePageChange,
  totalPages,
  isLoading,
}: Props) => {
  const navigate = useNavigate();
  const handlePageChange = (page: { selected: number }) => {
    var selectedPage = page?.selected;
    hanldePageChange(selectedPage);
  };

  const handleRowClick = (long: number, lat: number) => {
    navigate(`/city/detail?long=${long}&lat=${lat}`);
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
            {!isLoading ? (
              <>
                {cities?.length > 0 ? (
                  <>
                    {cities?.length > 0 &&
                      cities?.map((city: ICity, index: number) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-100 cursor-pointer"
                          onClick={() =>
                            handleRowClick(city.longitude, city.latitude)
                          }
                        >
                          <td className="py-4 pl-4 text-sm text-gray-700">
                            {city.name}
                          </td>
                          <td className="py-4 pl-4 text-sm text-gray-700">
                            {city.country}
                          </td>
                          <td className="py-4 pl-4 text-sm text-gray-700">
                            {city.region}
                          </td>
                          <td className="py-4 pl-4 text-sm text-gray-700">
                            {city.population}
                          </td>
                        </tr>
                      ))}
                  </>
                ) : (
                  <>
                    <tr>
                      <td colSpan={4} className="py-20 text-center ">
                        <NoTableRecords />
                      </td>
                    </tr>
                  </>
                )}
              </>
            ) : (
              <CitiesTableSkeleton />
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-center py-3 bg-gray-50 sm:px-6">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
