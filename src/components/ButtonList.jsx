import React from "react";
import FilterButton from "./FilterButton";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const filterBtnLists = [
    "Trending",
    "Trailers",
    "Games",
    "News",
    "Live",
    "Fashion",
    "Music",
    "Filmi",
    "TV",
    "Cinemas",
    "Podcasts",
    "Technology",
    "Career",
    "Hollywood",
  ];

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={
        "py-2 flex overflow-x-scroll no-scrollbar " +
        (!isMenuOpen && " justify-center")
      }
    >
      <FilterButton btnName={"All"} className={"bg-black text-white"} />
      {filterBtnLists?.map((list, index) => (
        <FilterButton
          btnName={list}
          key={index}
          className={" bg-neutral-200"}
        />
      ))}
    </div>
  );
};

export default ButtonList;
