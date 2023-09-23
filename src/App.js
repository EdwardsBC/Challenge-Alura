// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import MainBanner from './components/MainBanner';
import VideoList from './components/VideoList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <VideoList />
      <Footer />
    </div>
  );
}

export default App;
