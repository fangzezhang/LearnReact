import React, {useState} from 'react';
import Post from "@/views/hook/useTransition/Post";
import Contact from "@/views/hook/useTransition/Contact";
import About from "@/views/hook/useTransition/About";
import TabButton from "@/views/hook/useTransition/TabButton";

export default function Index() {
  const [tab, setTab] = useState('about');

  return (
    <div className="box">
      <TabButton
        isActive={tab === 'about'}
        onClick={() => setTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'post'}
        onClick={() => setTab('post')}
      >
        Post(slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => setTab('contact')}
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
