import React from 'react';

const cssClass = {
  background: 'red',
  color: 'blue',
};

export default function DeclareCSSOutside() {
  return (
    <div className={cssClass}>
      在组件外部声明CSS, 避免每次重新渲染都重新创建对象
    </div>
  );
}
