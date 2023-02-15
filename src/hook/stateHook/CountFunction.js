import React, { useState, useEffect } from 'react';

export default function CountFunction() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.info(count);  // setCount 是异步更新, 这里显示的是之前的 count。
  }

  return (
    <div>
      <p>Function count: {count}</p>
      <button onClick={ handleClick }>
        click + 1
      </button>
    </div>
  );
}
