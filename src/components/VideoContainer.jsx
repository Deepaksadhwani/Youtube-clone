import {  useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const isLoading = useSelector((store) => store.video.isLoading);
  const videoData = useSelector((store) => store.video.data);
  if (!videoData) return;
  console.log(videoData);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className=" grid grid-cols-1 pt-8 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videoData.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
