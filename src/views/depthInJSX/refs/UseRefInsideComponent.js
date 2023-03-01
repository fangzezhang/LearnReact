import React, { useState, useRef } from "react";

export default function UseRefInsideComponent() {
  const textRef = useRef(null);
  const [cbRef, setCbRef] = useState(null);

  function handleClick() {
    textRef.current.focus();
    console.info(cbRef);
  }

  function refCallback(e) {
    setCbRef(e);
  }

  return (
    <div>
      <p> Can use Ref <b>inside function component</b> </p>
      <input type="text" ref={textRef} />
      <input type="text" ref={refCallback} />
      <button onClick={handleClick}>click to focus text input</button>
    </div>
  )
}
