import React from 'react';
import { Link } from "react-router-dom";

export default function AppAside() {
  return (
    <nav className="App-aside">
      <ul>
        <li>
          <Link className="App-link" to="/">Hook</Link>
        </li>
        <li>
          <Link className="App-link" to="/depthInJSX">DepthInJSX</Link>
        </li>
      </ul>
    </nav>
  );
}
