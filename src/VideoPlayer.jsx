// src/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = () => {
  const videoId = '16QwXOYtBA1Lti7uDq9JXz4QyqjCJZ4pE'; // Your video ID
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div className="video-container">
      <iframe
        src={embedUrl}
        width="640"
        height="480"
        allow="autoplay"
        frameBorder="0"
        title="Google Drive Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
