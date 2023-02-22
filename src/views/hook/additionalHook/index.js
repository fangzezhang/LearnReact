import React from 'react';
import UseReducerFunction from "@/views/hook/additionalHook/UseReducerFunction";

export default function Index() {
  return (
    <div className="box" style={{marginTop: '10px'}}>
      <h4>额外的 Hook</h4>
      <div className="maxHeight">
        <UseReducerFunction />
      </div>
    </div>
  );
}
