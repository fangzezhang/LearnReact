import React from 'react';
import CopyWithin from "@/views/arrayMethods/CopyWithin";
import UseIndexAsKey from "@/views/arrayMethods/UseIndexAsKey";
import NotUseIndexAsKey from "@/views/arrayMethods/NotUseIndexAsKey";
import Game from "@/views/arrayMethods/game/Game";

export default function Index() {

  return (
    <div className="box">
      <CopyWithin />
      <hr/>
      <UseIndexAsKey />
      <hr/>
      <NotUseIndexAsKey />
      <hr/>
      <Game />
    </div>
  );
}
