import React from "react";
import './App.scss';
// import HookFunction from "./views/hook/HookFunction";
// import DepthInJSX from './views/depthInJSX';
// import { logProps } from "./util/hoc";
import AppAside from "@/components/AppAside";
import { Outlet } from 'react-router-dom';
import ErrorBoundary from "@/components/ErrorBoundary";

function App() {
  // const HOCDepthInJSX = logProps(DepthInJSX);

  return (
    <div className="App">
      <header className="App-header" style={{overflowX: 'auto'}}>
        {/*<HookFunction />
        <HOCDepthInJSX />*/}
        <AppAside />
        <React.Suspense>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
