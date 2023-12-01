import React from "react";

const SuggestionCard = ({ data }) => {
  const { snippet, statistics } = data;

  const { thumbnails, channelTitle, title, publishedAt } = snippet;

  const convertedViews = (views) => {
    return views > 1000000
      ? Math.floor(views / 1000000) + "M"
      : Math.floor(views / 1000) + "K";
  };

  const convertTime = (time) => {
    // Given date in UTC format
    const givenDate = new Date(time);

    // Current date and time in UTC
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - givenDate;

    // Convert the time difference to seconds
    const secondsDifference = Math.floor(timeDifference / 1000);

    // Calculate the duration in hours, minutes, and seconds
    const days = Math.floor(secondsDifference / (3600 * 24));
    const hours = Math.floor(secondsDifference / 3600);
    const minutes = Math.floor((secondsDifference % 3600) / 60);
    // const seconds = secondsDifference % 60;

    // Display the duration

    return days >= 1
      ? days === 1
        ? days + " day ago"
        : days + " day ago"
      : hours >= 1
      ? hours + " hours ago"
      : minutes + " minutes ago";
  };

  return (
    <div className="flex my-2 h-28 hover:scale-95 hover:shadow-none shadow rounded-lg transition-all">
      <img className="rounded-lg h-28" src={thumbnails?.medium?.url} alt="" />
      <div className=" pl-2 ">
        <ul className="">
          <li className="text-sm font-semibold h-14 overflow-hidden py-2.5">
            {title}
          </li>
          <li className="text-xs font-semibold h-7 pt-1.5">{channelTitle}</li>
          <li className="text-xs font-semibold h-7 ">
            <span>{convertedViews(statistics?.viewCount)} Views</span>{" "}
            <span className="px-1">•</span>
            <span>{convertTime(publishedAt)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuggestionCard;
