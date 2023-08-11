import React, {useState, useRef, useEffect} from 'react';
import VideoPlayer from "@/views/video/VideoPlayer";
import VideoControl from "@/views/video/VideoControl";

export default function Index() {
  const videoUrl = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm';
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  let videoPlayerRef = useRef(null);

  const handleSeek = (newPosition) => {
    videoPlayerRef.current.currentTime = newPosition;
    setCurrentTime(newPosition);
  };

  useEffect(() => {
    videoPlayerRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(videoPlayerRef.current.currentTime);
    });
    videoPlayerRef.current.addEventListener('durationchange', () => {
      setDuration(videoPlayerRef.current.duration);
    })
  }, []);

  return (
    <div>
      <VideoPlayer videoUrl={videoUrl} ref={videoPlayerRef}/>
      <VideoControl
        duration={duration}
        currentTime={currentTime}
        onSeek={handleSeek}
      />
    </div>
  );
}
