import React from "react";

export const CitiesTable = () => {
  return (
    <div className="w-full">
      <div className="overflow-hidden shadow rounded-lg bg-pink-100 ">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50  ">
            <tr>
              <th
                scope="col"
                className="py-4 pl-4 text-left text-sm font-semibold text-gray-900 "
              >
                City
              </th>
              <th className="py-3 pl-2 text-left text-sm font-semibold text-gray-900 ">
                Country
              </th>
              <th className="py-3 pl-2 text-left text-sm font-semibold text-gray-900 ">
                Region
              </th>
              <th className="py-3 pl-2 text-left text-sm font-semibold text-gray-900 ">
                Population
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            <tr>
              <td className="py-4 pl-4 text-sm text-gray-700">city</td>
              <td>country</td>
              <td>region</td>
              <td>population</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
