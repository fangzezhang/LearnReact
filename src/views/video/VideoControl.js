import React, {useEffect, useState} from 'react';

export default function VideoControl({duration, currentTime, onSeek}) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragTime, setDragTime] = useState(0);

  const handleChange = (e) => {
    if (isDragging) {
      setDragTime(e.target.value);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    setDragTime(currentTime);
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);

    const newPosition = parseFloat(e.target.value);

    onSeek(newPosition);
  };

  return (
    <>
      <input
        type="range"
        min={0}
        max={duration}
        value={isDragging ? dragTime : currentTime}
        onChange={handleChange}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      />
    </>
  );
}
