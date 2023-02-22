import React from 'react';
import { ZhanSanContext } from "@/context/ZhanSanContext";
import ParentNoProvider from "@/views/hook/contextHook/ParentNoProvider";
import ParentHasProvider from "@/views/hook/contextHook/ParentHasProvider";

export default function Index() {
  return (
    <div className="box" style={{ marginTop: '10px' }}>
      <h4>Context Hook</h4>
      <div className="maxHeight">
        <ZhanSanContext.Provider value={{
          name: 'lisi',
          age: 28
        }}>
          <ParentHasProvider />
        </ZhanSanContext.Provider>
        <ParentNoProvider />
      </div>
    </div>
  );
}
