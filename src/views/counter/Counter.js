import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { increment, decrement, incrementByAmount, setName } from "@/store/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function incrementHandle() {  // 多个 dispatch 只会执行一次
    let a = dispatch(increment());
    dispatch(setName('zhang san'));
  }

  function jumpTo() {
    navigate('/hook');
  }

  return (
    <div>
      <p>{count}, name: {name}</p>
      <button onClick={incrementHandle}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(6))}>incrementByAmount</button>
      <button onClick={jumpTo}>跳转到 Hook</button>
    </div>
  );
}
