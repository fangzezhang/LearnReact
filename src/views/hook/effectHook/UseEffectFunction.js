import React, {useState, useEffect} from 'react';

export default function UseEffectFunction() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  //  set depends only execute effect when "count" changed:
  //  传空数组: Effect 只运行一次(仅在组件挂载和卸载时执行)
  }, [count]);

  console.info('父组件的属性变化, 即使子组件没有依赖该属性, 也会重新渲染');

  return (
    <div>
      <p>Effect function count: {count}</p>
      <button onClick={changeCount}>
        click
      </button>
    </div>
  );
}
