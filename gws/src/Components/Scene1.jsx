import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Scene1 = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Handle video end and redirect
  const handleVideoEnd = () => {
    navigate('/Quiz'); // Replace '/next-page' with the path of the page you want to redirect to
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.loop = false;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video started playing');
          })
          .catch(error => {
            console.error('Autoplay was prevented, adding fallback controls', error);
            video.muted = true;
            video.play();
          });
      }

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Full-screen video */}
      <video
        ref={videoRef}
        src="/animation.mp4"  // Ensure this path is correct
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        autoPlay
        onError={(e) => console.error('Video failed to load:', e)}
        loop={false}
      />
    </div>
  );
};

export default Scene1;
