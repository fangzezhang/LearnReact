import React from 'react';

export default function Post() {
  const items = [];

  const startTime = performance.now();

  while (performance.now() - startTime < 1000) {}

  for (let i = 0; i < 500; i++) {
    items.push(<li key={i}>Post #{i + 1}</li>);
  }

  return (
    <ul style={{height: '700px', overflowX: 'scroll'}}>
      {items}
    </ul>
  );
}
