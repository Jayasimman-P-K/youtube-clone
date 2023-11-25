import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;

  const { thumbnails, channelTitle, title } = snippet;
  // publishedAt
  // py-2 my-2 mr-5
  return (
    <div className="w-[410px] pr-5 mb-8  hover:scale-95 transition-all">
      <img className="rounded-lg w-full" src={thumbnails?.medium?.url} alt="" />
      <div>
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li className="">{channelTitle}</li>
          <li className="">{statistics?.viewCount} Views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
