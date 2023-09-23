import React from 'react';
import VideoCard from './VideoCard';

const VideoList = () => {
  const videos = [
    { id: 't_57XrDlMBY', title: 'Warframe' }, // Reemplaza con los IDs de los videos que desees
    { id: 'qpG0lGyCMPw', title: '4 Runs increibles' },
    // Añade más videos aquí
  ];

  return (
    <div style={{ backgroundColor: '#333333', color: '#ffffff', overflowX: 'scroll', padding: '1em' }}>
      {videos.map((video) => (
        <VideoCard key={video.id} videoId={video.id} title={video.title} />
      ))}
    </div>
  );
};

export default VideoList;
