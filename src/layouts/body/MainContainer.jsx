import ButtonList from "@/components/ButtonList";
import VideoContainer from "@/components/VideoContainer";
import useGetVideos from "@/hooks/useGetVideos";
import React, { useEffect } from "react";

const MainContainer = () => {
  useEffect(() => {
    useGetVideos();
  }, []);

  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
