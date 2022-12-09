import React, {useState, useEffect} from 'react';

export default function UseEffectFunction() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // return function: 需要清除的操作, similar to componentWillUnmount:
    return function cleanup() {

    }
  //  set depends only execute effect when "count" changed:
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={changeCount}>
        click
      </button>
    </div>
  );
}
