import React from "react";
import {
  HamburgerIcon,
  MicIcon,
  SearchIcon,
  UserIcon,
  YoutubeIcon,
} from "../utils/icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between m-5 items-center">
      <div className="flex items-center ">
        <button className=" p-2 rounded-full hover:bg-gray-200 transition-all">
          <img
            className="w-10 h-6"
            onClick={toggleMenuHandler}
            src={HamburgerIcon}
            alt=""
          />
        </button>

        <img
          className="h-6 w-full ml-7 cursor-pointer"
          src={YoutubeIcon}
          alt=""
          srcset=""
        />
      </div>

      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 pr-80 pl-4 py-2 rounded-l-full"
          placeholder="Search"
        />
        <button className="border border-l-0 border-gray-300 p-2 px-4 rounded-r-full bg-gray-50 hover:bg-gray-200">
          <img className="w-full h-6" src={SearchIcon} alt="" />
        </button>
        <button className="border border-l-0 border-gray-300 p-2 ml-4  rounded-full bg-gray-100 hover:bg-gray-200">
          <img className="w-full h-6" src={MicIcon} alt="" />
        </button>
      </div>

      <div className="border border-gray-300 rounded-full p-2 cursor-pointer">
        <img className="w-full h-6" src={UserIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
