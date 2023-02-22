import React from 'react';
import UseState from './stateHook';
import UseEffect from './effectHook';
import CustomHook from './customHook';
import ContextHook from './contextHook';

export default function HookFunction() {
  return (
    <div>
      <UseState />
      <UseEffect />
      <CustomHook />
      <ContextHook />
    </div>
  );
}
