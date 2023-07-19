import React, { useState, useEffect } from 'react';

export default function CountFunction(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.info('setCount 是异步更新, 这里显示的是之前的 count: ' + count);
  }

  useEffect(() => {
    const handle = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(handle);
  }, []);

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
