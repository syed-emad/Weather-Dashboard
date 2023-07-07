export const Cities = () => {
  return (
    <div className="shadow rounded-sm bg-pink-100 ">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="text-left text-sm font-semibold text-gray-900 "
            >
              City
            </th>
            <th className="text-left text-sm font-semibold text-gray-900 ">
              Country
            </th>
            <th className="text-left text-sm font-semibold text-gray-900 ">
              Region
            </th>
            <th className="text-left text-sm font-semibold text-gray-900 ">
              Population
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>city</td>
            <td>country</td>
            <td>region</td>
            <td>population</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
