import React, { useState, useEffect } from 'react';

/*
* 测试使用模块作用域存储变量：需要暴漏重置值的方法
* */
let a = 0;
export default function CountFunction(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    a = a + 1;
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
      <p>Function count: {count}, a: {a}</p>
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
