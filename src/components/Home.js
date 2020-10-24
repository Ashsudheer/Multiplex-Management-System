import React from 'react';
import Navbar from './Navbar';
import Movies from './Movies';
import Screens from './Screens';

function Home() {
  return (
    <div>
        <Navbar />
        <Movies />
        <Screens />
    </div>
  );
}

export default Home;
