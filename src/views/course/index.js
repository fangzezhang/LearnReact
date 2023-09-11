import React, {useState} from 'react';
import Tabs from "@/components/Tabs";
import PropsChangeEffectRender from "@/views/course/PropsChangeEffectRender";

export default function Index() {
  const items = [
    'props变化时 Effect 中的变化是否会导致重新渲染',
  ];

  const [tab, setTab] = useState(() => {
    return items[0];
  });

  function handleClick(item) {
    setTab(item);
  }

  function setComponent() {
    switch (tab) {
      case tab === items[0]: {
        return <PropsChangeEffectRender />;
      }
      default:
        return <PropsChangeEffectRender />;
    }
  }

  return (
    <div>
      <Tabs items={items} onclick={handleClick}></Tabs>

      <hr/>
      { setComponent() }
    </div>
  );
}
