import React from 'react';
import bg from '../home.png';
import CafeButton from './Cafe/CafeButton';

const Home = () => {
  return (
    <div className="mobile">
      {/* level status bar here! */}
      <img src={bg} alt='cafe background' width="400" height="800" style={{
        objectFit: "cover", ObjectPosition: "25% 25%"
      }}>

      </img>
      <CafeButton location="/" content="Ingredients Run"></CafeButton>
      <CafeButton location="/" content="Kitchen"></CafeButton>
      <CafeButton location="/" content="Display Cabinet"></CafeButton>

    </div>
  );
}

export default Home;