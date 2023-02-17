import React from "react";
import './App.scss';
// import HookFunction from "./views/hook/HookFunction";
// import DepthInJSX from './views/depthInJSX';
// import { logProps } from "./util/hoc";
import AppAside from "@/components/AppAside";
import { Outlet } from 'react-router-dom';

function App() {
  // const HOCDepthInJSX = logProps(DepthInJSX);

  return (
    <div className="App">
      <header className="App-header" style={{overflowX: 'auto'}}>
        {/*<HookFunction />
        <HOCDepthInJSX />*/}
        <AppAside />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
