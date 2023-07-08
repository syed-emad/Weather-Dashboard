import React from "react";

export const CitiesTableSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
        <tr key={item} className="bg-gray-200 animate-pulse">
          <td className="py-4 pl-4 text-sm text-gray-700"></td>
          <td className="py-4 pl-4 text-sm text-gray-700"></td>
          <td className="py-4 pl-4 text-sm text-gray-700"></td>
          <td className="py-4 pl-4 text-sm text-gray-700"></td>
        </tr>
      ))}
    </>
  );
};
