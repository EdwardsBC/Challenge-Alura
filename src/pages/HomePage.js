import React from 'react';
import Header from '../components/Header';
import VideoCard from '../components/VideoCard';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <VideoCard title="Video 1" description="Descripción del video 1" />
        <VideoCard title="Video 2" description="Descripción del video 2" />
      </main>
    </div>
  );
}

export default HomePage;
