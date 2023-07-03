import React, {memo} from 'react';

function SlowPost({i}) {
  const startTime = performance.now();

  while (performance.now() - startTime < 1) {}

  return (
    <li>Post #{i + 1}</li>
  )
}

export default memo(function Post() {
  const items = [];

  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost i key={i} />);
  }

  return (
    <ul style={{height: '700px', overflowX: 'scroll'}}>
      {items}
    </ul>
  );
})
