import { configureStore } from '@reduxjs/toolkit';
import videoSlice from '../features/videos/videoSlice';
import tagsSlice from '../features/tags/tagsSlice';

export const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags:tagsSlice,
  },
});
