import React, {useState} from 'react';
import Tabs from "@/components/Tabs";
import PropsChangeEffectRender from "@/views/course/PropsChangeEffectRender";
import Animation from "@/views/course/Animation";

export default function Index() {
  const items = [
    'props变化时 Effect 中的变化是否会导致重新渲染',
    'Animation 实现透明度从0到1的显示'
  ];

  const [tab, setTab] = useState(() => {
    return items[0];
  });

  function handleClick(item) {
    setTab(item);
  }

  function setComponent() {
    switch (tab) {
      case items[0]: {
        return <PropsChangeEffectRender />;
      }
      case items[1]: {
        return <Animation />;
      }
      default:
        return <PropsChangeEffectRender />;
    }
  }

  return (
    <div>
      <Tabs items={items} tab={tab} onclick={handleClick}/>

      <hr/>
      { setComponent() }
    </div>
  );
}
