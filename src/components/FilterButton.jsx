import React from "react";

const FilterButton = ({ btnName }) => {
  return (
    <div className="mr-4 py-2 px-4 rounded-md text-sm font-semibold bg-gray-200">
      {btnName}
    </div>
  );
};

export default FilterButton;
