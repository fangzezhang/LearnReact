import React from "react";
import SlotComponent from './slotComponent';
import RefsFunction from "./refs";
import { useSelector } from "react-redux";

export default function Index() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h4>Depth In JSX</h4>
      <p>redux count: {count}</p>
      <SlotComponent />
      <RefsFunction />
    </div>
  )
}

