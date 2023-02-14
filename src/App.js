import React from "react";
import './App.scss';
import HookFunction from "./hook/HookFunction";
import DepthInJSX from './depthInJSX';
import { logProps } from "./util/hoc";

function App() {
  const HOCDepthInJSX = logProps(DepthInJSX);

  return (
    <div className="App">
      <header className="App-header" style={{overflowX: 'auto'}}>
        <HookFunction />
        <HOCDepthInJSX />
      </header>
    </div>
  );
}

export default App;
