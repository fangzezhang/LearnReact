import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/counterSlice';
import postReducer from '@/store/postSlice';
import { rtkSlice } from "@/store/rtkSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    [rtkSlice.reducerPath]: rtkSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkSlice.middleware),
});
