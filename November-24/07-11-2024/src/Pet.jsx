import React from "react";

const Pet = ({ name, animal, breed }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="w-1/3 py-3 px-4 text-gray-800">{name}</td>
      <td className="w-1/3 py-3 px-4 text-gray-800">{animal}</td>
      <td className="w-1/3 py-3 px-4 text-gray-800">{breed}</td>
    </tr>
  );
};

export default Pet;
