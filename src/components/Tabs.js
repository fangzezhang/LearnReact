import React from 'react';

export default function Tabs({items, onclick}) {
  return (
    <div>
      {
        items.map((item, index) => <button key={index} onClick={() => onclick(item)}>{item}</button>)
      }
    </div>
  );
}
