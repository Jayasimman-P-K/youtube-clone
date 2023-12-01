import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import SuggestionCard from "./SuggestionCard";
import { Link } from "react-router-dom";

const Suggestions = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    youtubeApi();
  }, []);

  const youtubeApi = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data?.json();
    setVideoData(json?.items);
    console.log(json);
  };

  if (!videoData) return null;

  return (
    <div className=" my-4 py-2  ">
      {videoData?.map((data) => {
        return (
          <Link key={data.id} to={"/watch?v=" + data.id}>
            <SuggestionCard data={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default Suggestions;
