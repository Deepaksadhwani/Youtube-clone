import { YOUTUBE_VIDEOS_API } from "@/utils/Constants";

const useGetVideos = () => {
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    console.log(data);
  };

  getVideos();
};

export default useGetVideos;
