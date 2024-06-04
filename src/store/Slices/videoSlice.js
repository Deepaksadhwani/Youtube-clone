import { YOUTUBE_VIDEOS_API } from "@/utils/Constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVideoData = createAsyncThunk("getVideo", async () => {
  const response = await fetch(YOUTUBE_VIDEOS_API);
  const data = await response.json();
  return data.items;
});

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getVideoData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getVideoData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getVideoData.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default videoSlice.reducer;