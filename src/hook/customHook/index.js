import React from "react";
import CustomHookClass from "./CustomHookClass";

export default function Index () {
  return (
    <div className="box" style={{marginTop: '10px'}}>
      <div className="maxHeight">
        <h4>custom hook</h4>
        <CustomHookClass />
      </div>
    </div>
  )
}
