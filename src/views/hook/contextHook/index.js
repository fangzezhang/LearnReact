import React from 'react';
import { ZhanSanContext } from "@/context/ZhanSanContext";
import ParentNoProvider from "@/views/hook/contextHook/ParentNoProvider";
import ParentHasProvider from "@/views/hook/contextHook/ParentHasProvider";

export default function Index() {
  class Test{
    constructor() {
      this.test = 'test';
      this.name = 'lisi';
      this.age = 28;
    };
  }

  const lisi = new Test();

  function clickHandler() {
    lisi.age = 55;
  }

  return (
    <div className="box" style={{ marginTop: '10px' }}>
      <h4>Context Hook</h4>
      <div className="maxHeight">
        <button onClick={clickHandler}>parent click change the context value</button>
        <ZhanSanContext.Provider value={lisi}>
          <ParentHasProvider />
        </ZhanSanContext.Provider>
        <ParentNoProvider />
      </div>
    </div>
  );
}
