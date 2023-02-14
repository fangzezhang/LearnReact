import React from "react";
import ChildComponent from "./ChildComponent";

export default function Index() {
  return (
    <div>
      <p>slot: </p>
      <ChildComponent>
        <div>
          this is slot div.
        </div>
      </ChildComponent>
    </div>
  )
}
