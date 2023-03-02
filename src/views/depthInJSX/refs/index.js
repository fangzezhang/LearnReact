import React, { useRef, useMemo } from "react";
import UseRefInsideComponent from "./UseRefInsideComponent";
import UseRefOnComponent from "./UseRefOnComponent";
import RefClass from "@/views/depthInJSX/refs/RefClass";
import Box from "@/views/depthInJSX/refs/Box";

export default function Index() {
  const initialArray = useMemo(() => {
    return Array.from({length: 5});
  }, []);
  const refs = useRef([]);
  const componentRef = useRef(null);
  const refClass = useRef(null);

  function handleClick() {
    componentRef.current.focus();
  }

  function handleClassClick() {
    refClass.current.handleChange();
  }

  function goToBox(index) {
    console.info(refs[index].current);
    console.info(refs[index].getYLocation());
  }

  return (
    <div>
      <h4>refs in function components</h4>
      <UseRefInsideComponent />
      <UseRefOnComponent ref={componentRef} />
      <RefClass ref={refClass} />
      <br/>
      <button onClick={handleClick}>click to focus text input</button>
      <button onClick={handleClassClick}>get Class SubComponent input value</button>
      <br/>
      {
        initialArray.map((val, index) => {
          return <Box key={index} ref={(node) => refs[index] = node} />
        })
      }
      <button onClick={() => goToBox(1)}>get index 1 box info</button>
      <button onClick={() => goToBox(2)}>get index 2 box info</button>
      <button onClick={() => goToBox(3)}>get index 3 box info</button>
    </div>
  )
}
