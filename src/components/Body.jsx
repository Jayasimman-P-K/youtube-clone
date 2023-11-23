import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="border-2 flex m-5">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
