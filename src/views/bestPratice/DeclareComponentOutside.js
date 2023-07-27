import React from 'react';

const ChildComponent = () => {
  return <div>child</div>
};

export default function DeclareComponentOutside() {
  return (
    <>
      <div>
        不要在其他组件中声明组件
      </div>
      <ChildComponent/>
    </>
  );
}
