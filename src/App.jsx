import React, { useEffect } from "react";
import NavBar from "./layouts/NavBar";
import Body from "./layouts/body/Body";
import { useDispatch } from "react-redux";
import { getVideoData } from "./store/Slices/videoSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./layouts/body/MainContainer";
import WatchPage from "./components/WatchPage";

const App = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(getVideoData());
  }, []);
  return (
    <div>
      <NavBar />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
