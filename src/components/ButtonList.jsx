import React from "react";
import FilterButton from "./FilterButton";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const filterBtnLists = [
    "All",
    "trending",
    "games",
    "news",
    "live",
    "music",
    "technology",
    "career",
  ];

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={
        "py-2 flex overflow-x-scroll no-scrollbar " +
        (!isMenuOpen && " justify-center")
      }
    >
      {filterBtnLists?.map((list, index) => (
        <FilterButton btnName={list} key={index} />
      ))}
      {filterBtnLists?.map((list, index) => (
        <FilterButton btnName={list} key={index * 0.5} />
      ))}
    </div>
  );
};

export default ButtonList;
