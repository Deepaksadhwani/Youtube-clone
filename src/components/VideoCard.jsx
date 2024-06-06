import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex h-[350px] flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg">
      <div>
        <img
          src={thumbnails.medium.url}
          alt="thumbnails"
          className="  w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">{title}</h2>
        <p className="mb-2 text-gray-600">{channelTitle}</p>
        <p className="text-gray-500">{viewCount} views</p>
      </div>
    </div>
  );
};

//higher order component use upper case of first letter
export const AdVideoCard = ({ info }) => {
  return (
    <div className="m-1 border-2  border-blue-900 p-1">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
