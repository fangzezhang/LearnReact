import React, { useRef, forwardRef, useImperativeHandle } from 'react';

function Box(props, ref) {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getYLocation: () => divRef.current?.getBoundingClientRect().top,
    current: divRef.current,
  }));

  return (
    <div
      ref={divRef}
      style={{
        height: '50px',
        backgroundColor: 'gray',
        margin: '10px'
      }}
    >
      box, 使用 useImperativeHandle 自定义ref 返回内容
    </div>
  );
}

export default forwardRef(Box);
