import React, { forwardRef } from 'react';

export default forwardRef(function UseRefOnComponent(props, ref) {
  return (
    <>
      <p>use ref <b>on component</b></p>
      <p>
        Error: Function components cannot be given refs
      </p>
      <p>
        Function 组件上不能使用 ref, 因为没有实例。
      </p>
      <p>
        可以使用 React.forwardRef() 包裹 Function 组件。
      </p>
      <input type="text" ref={ref}/>
    </>
  );
})
