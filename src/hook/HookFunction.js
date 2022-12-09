import React from 'react';
import CountFunction from "./stateHook/CountFunction";
import CountClass from "./stateHook/CountClass";

export default function HookFunction() {
  return (
    <div>
      <CountFunction />
      <CountClass />
    </div>
  );
}
