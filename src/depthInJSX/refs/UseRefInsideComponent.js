import React, { useRef } from "react";

export default function UseRefInsideComponent() {
  const textRef = useRef(null);

  function handleClick() {
    textRef.current.focus();
  }

  return (
    <div>
      <p> Can use Ref <b>inside function component</b> </p>
      <input type="text" ref={textRef} />
      <button onClick={handleClick}>click to focus text input</button>
    </div>
  )
}
