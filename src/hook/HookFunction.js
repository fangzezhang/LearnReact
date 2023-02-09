import React from 'react';
import UseState from './stateHook';
import UseEffect from './effectHook';
import CustomHook from './customHook';

export default function HookFunction() {
  return (
    <div>
      <UseState />
      <UseEffect />
      <CustomHook />
    </div>
  );
}
