import React from 'react';

const VideoCard = ({ videoId, title }) => {
  return (
    <div style={{ width: '300px', marginRight: '1em', float: 'left', marginBottom: '1em' }}>
      <iframe 
        width="300" 
        height="169" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title={title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <p>{title}</p>
    </div>
  );
};

export default VideoCard;
