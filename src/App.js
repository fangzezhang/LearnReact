import React from "react";
import './App.scss';
import HookFunction from "./hook/HookFunction";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{maxHeight: '900px', overflowX: 'auto'}}>
        <HookFunction />
      </header>
    </div>
  );
}

export default App;
