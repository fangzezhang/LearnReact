import React from 'react';
import UseState from './stateHook';
import UseEffect from './effectHook';
import CustomHook from './customHook';
import ContextHook from './contextHook';
import AdditionalHook from './additionalHook';

export default function HookFunction() {
  return (
    <div>
      <UseState />
      <UseEffect />
      <CustomHook />
      <ContextHook />
      <AdditionalHook />
    </div>
  );
}
