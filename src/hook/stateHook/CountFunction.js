import React, {useState} from 'react';

export default function CountFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Function count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      > click + 1
      </button>
    </div>
  );
}
