import React, {useState, useEffect, useRef} from 'react';

class FadeInAnimation {
  constructor(node) {
    this.node = node;
  }

  start(duration) {
    this.duration = duration;
    if (this.duration === 0) {
      this.onProgress(1);
    } else {
      this.onProgress(0);
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onFrame() {
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);

    this.onProgress(progress);

    if (progress < 1) {
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onProgress(progress) {
    this.node.style.opacity = progress;
  }

  stop() {
    cancelAnimationFrame(this.frameId);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}

function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);

    animation.start(1000);

    return () => {
      animation.stop();
    }
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: '50px',
        textAlign: 'center',
        fontSize: '50px',
        backgroundImage: 'radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c)'
      }}
    >
      Welcome
    </h1>
  )
}

export default function Animation() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      {show && <Welcome />}
    </>
  );
}
