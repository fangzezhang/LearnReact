import { useState } from 'react';

export default function useCustomReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);

    setState(nextState);
  }

  return [state, dispatch];
}
