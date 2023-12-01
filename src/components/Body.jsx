import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex my-5 mx-2 justify-between ">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
