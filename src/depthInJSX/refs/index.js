import React, { useRef } from "react";
import UseRefInsideComponent from "./UseRefInsideComponent";
import UseRefOnComponent from "./UseRefOnComponent";

export default function Index() {
  const componentRef = useRef(null);
  function handleClick(event) {
    console.info(event);
    componentRef.current.focus();
  }

  return (
    <div>
      <h4>refs in function components</h4>
      <UseRefInsideComponent />
      <UseRefOnComponent ref={componentRef} />
      <button onClick={handleClick}>click to focus text input</button>
    </div>
  )
}
