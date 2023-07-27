import React from 'react';
import DeclareCSSOutside from "@/views/bestPratice/DeclareCSSOutside";
import UsecallbackPreventFunctionRebuild from "@/views/bestPratice/UsecallbackPreventFunctionRebuild";

export default function Index() {

  return (
    <div>
      <h2>React 18 最佳实践</h2>
      <hr/>
      <DeclareCSSOutside/>
      <UsecallbackPreventFunctionRebuild/>
    </div>
  );
}