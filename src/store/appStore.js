import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import videoReducer from "./Slices/videoSlice";
import searchReducer from "./Slices/searchSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
    search: searchReducer,
  },
});

export default appStore;
