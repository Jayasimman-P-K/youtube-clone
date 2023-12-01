import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BULB_ICON,
  FILMS_ICON,
  GAME_ICON,
  HISTORY_ICON,
  HOME_ICON,
  LIKE_ICON,
  LIVE_ICON,
  MUSIC_ICON,
  NEWS_ICON,
  SHOPPING_ICON,
  SHORTS_ICON,
  SUB_ICON,
  TRENDING_ICON,
  TROPHY_ICON,
  UTUBE_ICON,
  UTUBE_MUSIC,
  UTUBE_TV,
  WATCH_LATER_ICON,
} from "../utils/icons";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="w-2/12 h-screen overflow-y-scroll no-scrollbar">
      <ul className="border-b">
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={HOME_ICON} alt="" /> <p>Home</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={SHORTS_ICON} alt="" /> <p>Shorts</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={SUB_ICON} alt="" />{" "}
            <p>Subscriptions</p>
          </li>
        </Link>
      </ul>
      <ul className="border-b">
        <h1 className="px-4 pt-4 pb-2 text-base font-semibold">You</h1>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={HISTORY_ICON} alt="" />{" "}
            <p>History</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={WATCH_LATER_ICON} alt="" />{" "}
            <p>Watch Later</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={LIKE_ICON} alt="" />{" "}
            <p>Liked Videos</p>
          </li>
        </Link>
      </ul>
      <ul className="border-b">
        <h1 className="px-4 pt-4 pb-2 text-base font-semibold">Explore</h1>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={TRENDING_ICON} alt="" />{" "}
            <p>Trending</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={SHOPPING_ICON} alt="" />{" "}
            <p>Shopping</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={MUSIC_ICON} alt="" /> <p>Music</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={FILMS_ICON} alt="" /> <p>Films</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={LIVE_ICON} alt="" /> <p>Live</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={GAME_ICON} alt="" /> <p>Gaming</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={BULB_ICON} alt="" /> <p>Learning</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={NEWS_ICON} alt="" /> <p>News</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={TROPHY_ICON} alt="" /> <p>Sport</p>
          </li>
        </Link>
      </ul>
      <ul className="border-b">
        <h1 className="px-4 pt-4 pb-2 text-base font-semibold">
          More from YouTube
        </h1>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={UTUBE_ICON} alt="" />{" "}
            <p>YouTube Premium</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={UTUBE_MUSIC} alt="" />{" "}
            <p>YouTube Music</p>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="flex hover:bg-neutral-100 px-4 py-3 rounded-lg">
            <img className="h-6 pr-4" src={UTUBE_TV} alt="" /> <p>YouTube TV</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
