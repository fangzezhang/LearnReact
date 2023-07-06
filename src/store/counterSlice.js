import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name: '',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setName,
} = counterSlice.actions;

export default counterSlice.reducer;
