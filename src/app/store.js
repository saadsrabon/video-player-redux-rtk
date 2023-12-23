import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videoSlice from '../features/videos/videoSlice';

export const store = configureStore({
  reducer: {
    videos: videoSlice
  },
});
