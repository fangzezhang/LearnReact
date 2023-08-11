import React, {forwardRef} from 'react';

export default forwardRef(function VideoPlayer({videoUrl}, ref) {

  return (
    <video src={videoUrl} ref={ref} controls />
  );
})
