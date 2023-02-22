import React, { useReducer } from 'react';

const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function UseReducerFunction() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>useReducer hook</p>
      <p>使用 reducer 重写 useState 计数器</p>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
