import React, { memo, useEffect } from 'react';
import { useImmer } from "use-immer";

/*
* React StrictMode 在开发服务器上渲染组件两次
* */
export default memo(function CopyWithin() {
  const [array, setArray] = useImmer([1,2,3,4]);

  useEffect(() => {
    console.info(0);
  });
  useEffect(() => {
    console.info(1);
  }, []);
  useEffect(() => {
    console.info(2);

    return () => {};
  }, []);

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
})
