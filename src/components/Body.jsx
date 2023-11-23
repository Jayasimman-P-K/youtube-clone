import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex my-10 mx-5 justify-between">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
