import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideosFromDb } from "./videoApis";

const initialState = {
    videos: [],
    isLoading: false,
    error: false,
    errorMessage: "",
    };

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos =await fetchVideosFromDb()
    return videos
});
    
const videoSlice =createSlice({
  name: "videos",
    initialState,
    extraReducers:builder=>{
       builder.addCase(fetchVideos.pending, (state) => {
         state.isLoading = true;
         state.error = false;
         state.errorMessage = "";
       })
       builder.addCase(fetchVideos.fulfilled, (state, action) => {
         state.isLoading = false;
         state.videos = action.payload.data;
       })
         builder.addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errorMessage = action.error?.message;
         })

    }
}) 
    
export default videoSlice.reducer;