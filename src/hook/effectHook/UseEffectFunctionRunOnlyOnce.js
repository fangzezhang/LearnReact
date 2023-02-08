import React, {useEffect, useState} from 'react';

export default function UseEffectFunctionRunOnlyOnce() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.info('start');
    const id = setInterval(() => {
      setCount((c) => {
        console.info(c);
        return c + 1;
      });
    }, 1000);
    return () => {
      console.info('remove');
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Effect function run only once count: {count}</p>
      <button onClick={changeCount}>
        click
      </button>
    </div>
  );
}
