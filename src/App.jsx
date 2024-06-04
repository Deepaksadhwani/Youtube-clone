import React, { useEffect } from "react";
import NavBar from "./layouts/NavBar";
import Body from "./layouts/body/Body";
import {  useDispatch } from "react-redux";
import { getVideoData } from "./store/Slices/videoSlice";

const App = () => {
  const dispatch = useDispatch();




  
  useEffect(() => {
    dispatch(getVideoData());
  }, []);
  return (
    
      <div>
        <NavBar />
        <Body />
      </div>
   
  );
};

export default App;
