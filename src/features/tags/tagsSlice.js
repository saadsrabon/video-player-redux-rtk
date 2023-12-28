
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTagsFromDb } from "./tagsApi";


const initialState = {
    tags: [],
    isLoading: false,
    error: false,
    errorMessage: "",
    };

export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags =await fetchTagsFromDb()
    console.log(tags)
    return tags
});
    
const tagsSlice =createSlice({
  name: "tags",
    initialState,
    extraReducers:builder=>{
       builder.addCase(fetchTags.pending, (state) => {
         state.isLoading = true;
         state.error = false;
         state.errorMessage = "";
       })
       builder.addCase(fetchTags.fulfilled, (state, action) => {
         state.isLoading = false;
         state.tags = action.payload;
       })
         builder.addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errorMessage = action.error?.message;
         })

    }
}) 
    
export default tagsSlice.reducer;