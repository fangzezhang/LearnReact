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
        <li>
          <NavLink className={`App-link ${({ isActive }) => isActive ? 'active' : undefined}`} to="/redux">Redux</NavLink>
          <ul>
            <li>
              <NavLink className={`App-link ${({ isActive }) => isActive ? 'active' : undefined}`} to="/redux/counter">
                 Counter
              </NavLink>
            </li>
            <li>
              <NavLink className={`App-link ${({ isActive }) => isActive ? 'active' : undefined}`} to="/redux/reduxThunk">
                Redux Thunk
              </NavLink>
            </li>
            <li>
              <NavLink className={`App-link ${({ isActive }) => isActive ? 'active' : undefined}`} to="/redux/RTK">
                Redux RTK
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
