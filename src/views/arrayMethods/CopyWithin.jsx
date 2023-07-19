import React, { useEffect } from 'react';
import { useImmer } from "use-immer";

export default function CopyWithin() {
  const [array, setArray] = useImmer([1,2,3,4]);

  function handleClick() {
    setArray(draft => {
      draft.copyWithin(1, 2);
    });
  }

  return (
    <>
      <h2>copyWithin</h2>
      <div>没必要看了, 和 Vue 不同, React 是直接进行值的覆盖而非拦截数组方法</div>
      { array }
      <button onClick={handleClick}>click</button>
    </>
  );
}
