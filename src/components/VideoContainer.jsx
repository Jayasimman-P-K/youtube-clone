import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    youtubeApi();
  }, []);

  const youtubeApi = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data?.json();
    setVideoData(json?.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!videoData) return null;

  return (
    <div className="h-screen overflow-y-scroll no-scrollbar">
      <div
        className={"flex flex-wrap my-4  " + (!isMenuOpen && " justify-center")}
      >
        {videoData?.map((data) => {
          return (
            <Link key={data.id} to={"/watch?v=" + data.id}>
              <VideoCard data={data} imgW={" w-[410px]"} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
