import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(6))}>incrementByAmount</button>
    </div>
  );
}
