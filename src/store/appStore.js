import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import videoReducer from "./Slices/videoSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
  },
});

export default appStore;
