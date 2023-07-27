import React, {useState} from 'react';

const ChildComponent = ({shouldRender}) => {
  if (!shouldRender) {
    return null;
  }

  return <div>child</div>
};

export default function DeclareComponentOutside() {
  const [shouldRender, setShouldRender] = useState(false);

  return (
    <>
      <div>
        不要在其他组件中声明组件。<br/>
        让子组件决定是否应该渲染, 这样子组件可以保持状态: 一直都在那里只是不可见。<br/>
        <button onClick={() => setShouldRender(!shouldRender)}>shouldRender</button>
      </div>
      <ChildComponent shouldRender={shouldRender} />
    </>
  );
}
