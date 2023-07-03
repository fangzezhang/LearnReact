import React, {useState, useTransition} from 'react';
import Post from "@/views/hook/useTransition/Post";
import Contact from "@/views/hook/useTransition/Contact";
import About from "@/views/hook/useTransition/About";
import TabButton from "@/views/hook/useTransition/TabButton";

export default function Index() {
  const [tab, setTab] = useState('about');
  const [isPending, startTransition] = useTransition();

  function selectTab(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }

  return (
    <div className="box">
      {isPending && <p>pending</p>}
      <TabButton
        isActive={tab === 'about'}
        onClick={() => selectTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'post'}
        onClick={() => selectTab('post')}
      >
        Post(slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr/>
      {tab === 'about' && <About />}
      {tab === 'post' && <Post />}
      {tab === 'contact' && <Contact />}
    </div>
  );
}
