import React from 'react';
import { NavLink } from "react-router-dom";

export default function AppAside() {
  return (
    <nav className="App-aside">
      <ul>
        <li>
          <NavLink className={`App-link ${({ isActive }) => isActive ? 'active' : undefined}`} to="/hook">Hook</NavLink>
        </li>
        <li>
          <NavLink className={`App-link ${({ isActive }) => isActive ? 'active' : undefined}`} to="/depthInJSX">DepthInJSX</NavLink>
        </li>
      </ul>
    </nav>
  );
}
