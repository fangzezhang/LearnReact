import React from 'react';
import DeclareCSSOutside from "@/views/bestPratice/DeclareCSSOutside";
import UsecallbackPreventFunctionRebuild from "@/views/bestPratice/UsecallbackPreventFunctionRebuild";
import DeclareComponentOutside from "@/views/bestPratice/DeclareComponentOutside";
import UseReducerReplaceUseState from "@/views/bestPratice/UseReducerReplaceUseState";

export default function Index() {

  return (
    <div>
      <h2>React 18 最佳实践</h2>
      <hr/>
      1: <DeclareCSSOutside/>
      2: <UsecallbackPreventFunctionRebuild/>
      3: <DeclareComponentOutside/>
      4: <UseReducerReplaceUseState/>
    </div>
  );
}
