import React from "react";

const FilterButton = ({ btnName, className }) => {
  return (
    <div
      className={"mr-4 py-2 px-4 rounded-md text-sm font-semibold " + className}
    >
      {btnName}
    </div>
  );
};

export default FilterButton;
