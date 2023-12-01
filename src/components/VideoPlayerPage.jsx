import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { closeMenu } from "../utils/appSlice";
import Suggestions from "./Suggestions";

const VideoPlayerPage = () => {
  const [searchParams] = useSearchParams();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className={"w-7/12 " + (isMenuOpen ? " w-9/12 px-8" : " mr-7")}>
        <div>
          <iframe
            className="w-full h-[500px] rounded-lg"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>

      <div className="w-[27%]">
        <LiveChat />
        <Suggestions />
      </div>
    </div>
  );
};

export default VideoPlayerPage;
