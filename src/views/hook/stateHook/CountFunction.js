import React, { useState } from 'react';

export default function CountFunction(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.info('setCount 是异步更新, 这里显示的是之前的 count: ' + count);
  }

  console.info('状态更改，重新执行整个函数？');

  return (
    <div>
      {/*<p>UI错误: {count.c.a + 1}</p>*/}
      <p>Function count: {count}</p>
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
