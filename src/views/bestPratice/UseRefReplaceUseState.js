import React from 'react';

export default function UseRefReplaceUseState() {

  return (
    <>
      <div>
        当组件不应该重新渲染时, 使用 useRef 替代 useState。
        useRef 创建的引用在组件重新渲染时不会丢失, 且 useRef 数据更新不会触发组件的重新渲染。
      </div>
    </>
  );
}
