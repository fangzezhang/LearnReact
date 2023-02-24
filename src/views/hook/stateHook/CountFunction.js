import React, { useState } from 'react';

export default function CountFunction(props) {
  const [count, setCount] = useState(null);

  function handleClick() {
    setCount(count + 1);
    console.info(count);  // setCount 是异步更新, 这里显示的是之前的 count。
  }

  console.info('状态更改，重新执行整个函数？');
  console.info(props);

  return (
    <div>
      <p>Function count: {count.c.a + 1}</p>
      <button onClick={ () => {
        handleClick();
        handleClick();
      } }>
        click + 1
      </button>
      <>
        {props.children}
      </>
    </div>
  );
}
