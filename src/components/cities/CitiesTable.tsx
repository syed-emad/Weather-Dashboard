import { Pagination } from "../Pagination";
import { useNavigate } from "react-router-dom";

interface Props {
  cities: any;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}
const headings = ["City", "Country", "Region", "Population"];

export const CitiesTable = ({
  cities,
  currentPage,
  setCurrentPage,
  totalPages,
}: Props) => {
  const navigate = useNavigate();

  const handlePageChange = (page: any) => {
    var selectedPage = page?.selected;
    setCurrentPage(selectedPage);
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
            {cities?.length &&
              cities?.map((city: any, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50"
                  onClick={() => handleRowClick(city.longitude, city.latitude)}
                >
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
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
