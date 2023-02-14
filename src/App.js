import React from "react";
import './App.scss';
import HookFunction from "./hook/HookFunction";
import DepthInJSX from './depthInJSX';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{overflowX: 'auto'}}>
        <HookFunction />
        <DepthInJSX />
      </header>
    </div>
  );
}

export default App;
