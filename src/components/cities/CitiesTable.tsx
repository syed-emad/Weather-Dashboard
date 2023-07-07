import React from "react";
interface Props {
  cities: any;
}
const headings = ["City", "Country", "Region", "Population"];
export const CitiesTable = ({ cities }: Props) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden shadow rounded-lg bg-pink-100 ">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50  ">
            <tr>
              {headings.map((heading) => (
                <th
                  scope="col"
                  className="py-4 pl-4 text-left text-sm font-semibold text-gray-900 "
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {cities.length &&
              cities.map((city: any) => (
                <tr>
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
      </div>
    </div>
  );
};
