import ReactPaginate from "react-paginate";

interface Props {
  cities: any;
  paginationData?: any;
}
const headings = ["City", "Country", "Region", "Population"];
export const CitiesTable = ({ cities, paginationData }: Props) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden shadow rounded-lg bg-pink-100 ">
        <table className="w-full   divide-y divide-gray-200 border-solid">
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
                <tr key={index}>
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
        <div className="flex  items-center justify-center py-3 bg-gray-50 sm:px-6">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            forcePage={0}
            pageCount={10}
            breakLabel={"..."}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            activeLinkClassName={
              "bg-blue-50 border-blue-900 hover:bg-blue-300 text-gray-900"
            }
            pageLinkClassName={
              "px-4 py-2 m-1 border-t-2 hover:bg-gray-100 text-gray-500  "
            }
            nextLinkClassName={"px-4 py-2 m-1  "}
            previousLinkClassName={"px-4 py-2 m-1  "}
            breakLinkClassName={"px-4 py-2  "}
            containerClassName={"flex"}
          />
        </div>
      </div>
    </div>
  );
};
