import React from 'react';
import CopyWithin from "@/views/arrayMethods/CopyWithin";
import UseIndexAsKey from "@/views/arrayMethods/UseIndexAsKey";
import NotUseIndexAsKey from "@/views/arrayMethods/NotUseIndexAsKey";

export default function Index() {

  return (
    <div className="box">
      <CopyWithin />
      <hr/>
      <UseIndexAsKey />
      <hr/>
      <NotUseIndexAsKey />
    </div>
  );
}
