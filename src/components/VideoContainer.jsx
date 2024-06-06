import { useSelector } from "react-redux";
import VideoCard, { AdVideoCard} from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const isLoading = useSelector((store) => store.video.isLoading);
  const videoData = useSelector((store) => store.video.data);
  if (!videoData) return;
  console.log(videoData);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className=" grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AdVideoCard info={videoData[0]} />
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
