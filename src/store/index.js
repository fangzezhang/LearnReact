import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/counterSlice';
import postReducer from '@/store/postSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
