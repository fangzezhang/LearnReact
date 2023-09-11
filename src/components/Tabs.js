import React from 'react';

export default function Tabs({items, tab, onclick}) {
  const active = {
    background: 'red',
  };

  return (
    <div>
      {
        items.map((item, index) => (
          <button
            key={index}
            style={tab === item ? active : {}}
            onClick={() => onclick(item)}>
            {item}
          </button>
        ))
      }
    </div>
  );
}
