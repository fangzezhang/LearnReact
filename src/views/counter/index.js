import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <h4>Redux</h4>
      <Outlet/>
    </div>
  );
}
