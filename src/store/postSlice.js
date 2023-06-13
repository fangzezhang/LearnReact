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
    receiveUser(state, action) {
      state.userInfo = action.payload;
    },
    requestUser(state) {
      state.loading = true;
    },
    endRequest(state) {
      state.loading = false;
    }
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

// 异步请求的方法一: 通过 createAsyncThunk + extraReducers.builder 实现 ajax + loading
export const fetchUser = createAsyncThunk('user/fetchUsers', async (params, thunkAPI) => {
  console.info(params);
  console.info(thunkAPI);

  const response = await api.get('/auth');

  return response.data;
});

// 异步请求的方法二: 通过中间件实现
export const reducerFetchUser = (params) => {
  return async function (dispatch, getState) {
    dispatch(requestUser());

    try {
      const response = await api.get('/auth');

      dispatch(receiveUser(response.data));
      dispatch(endRequest());
    } catch(e) {
      dispatch(endRequest());
    }
  }
};

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
  increment,
  receiveUser,
  requestUser,
  endRequest,
} = postSlice.actions;
export default postSlice.reducer;
