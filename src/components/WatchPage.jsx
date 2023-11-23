import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex  justify-center w-full">
      <div className={"w-7/12 " + (isMenuOpen ? " w-9/12 px-8" : " mr-7")}>
        <div className="">
          <iframe
            className="w-full h-[500px] rounded-lg"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">Comment Section</div>
      </div>
      <div className="w-3/12 p-2 px-4 border-2 rounded-lg">
        Suggestion Section
      </div>
    </div>
  );
};

export default WatchPage;

/* <iframe
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */
