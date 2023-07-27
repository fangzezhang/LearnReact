import React, {useCallback, useState} from 'react';

export default function UsecallbackPreventFunctionRebuild() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div onClick={handleClick}>
        使用 useCallback 防止函数重新创建, 只要依赖项不改变, useCallback 就会在渲染之间保留函数的旧实例。<br/>
        不要将 useCallback 和空依赖数组一起使用。{count}
      </div>
    </>
  );
}
