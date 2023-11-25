/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  HamburgerIcon,
  MicIcon,
  SearchIcon,
  UserIcon,
  YoutubeIcon,
} from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // const searchCache = useSelector(store => store.searchCache)
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        searchApi();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const searchApi = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between m-5 items-center">
      <div className="flex items-center ">
        <button className=" p-2 rounded-full hover:bg-neutral-200 transition-all">
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

      <div className="w-6/12 relative">
        <div className="flex items-center">
          <input
            type="text"
            className="border border-neutral-300 px-4 py-2 w-3/4 rounded-l-full focus:outline-none focus:border focus:border-black "
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-l-0 border-neutral-300 p-2 px-4 rounded-r-full bg-neutral-50 hover:bg-neutral-200">
            <img className="w-full h-6" src={SearchIcon} alt="" />
          </button>
          <button className="border border-l-0 border-neutral-300 p-2 ml-4  rounded-full bg-neutral-100 hover:bg-neutral-200">
            <img className="w-full h-6" src={MicIcon} alt="" />
          </button>
        </div>
        {suggestions.length > 0 && showSuggestion && (
          <div className="absolute border w-3/4 bg-white py-4 my-2 rounded-2xl shadow-neutral-500 shadow-sm border-neutral-100 z-10">
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    key={suggestion}
                    className="px-4 py-0.5 font-semibold hover:bg-neutral-200"
                  >
                    {/* <img
                      className=" h-4 opacity-70 mr-2"
                      src={SearchIcon}
                      alt=""
                    /> */}
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="border border-neutral-300 rounded-full p-2 cursor-pointer">
        <img className="w-full h-6" src={UserIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
