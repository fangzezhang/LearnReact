import React, { useState } from 'react';
import KeepAlive, { AliveScope } from '@/components/KeepAlive';

export default function CountFunction(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.info(count);  // setCount 是异步更新, 这里显示的是之前的 count。
  }

  console.info('状态更改，重新执行整个函数？');
  console.info(props);

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
