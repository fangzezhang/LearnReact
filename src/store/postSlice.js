import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '@/api';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    status: '',
    loading: false,
    error: null,
    count: 0,
    userInfo: {
      name: '',
      age: 0,
      salary: '',
      job: '',
    },
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'loading';
        state.loading = true;
        console.info(action);
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.info(action);
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const fetchUser = createAsyncThunk('user/fetchUsers', async (params, thunkAPI) => {
  console.info(params);
  console.info(thunkAPI);

  const response = await api.get('/auth');

  return response.data;
});

export const thunkFunction = (count) => {
  return (dispatch, getState) => {
    const prevState = getState();
    console.info(prevState);

    dispatch(increment(count));

    const nextState = getState();
    console.info(nextState);
  }
};

export const {
  increment
} = postSlice.actions;
export default postSlice.reducer;
