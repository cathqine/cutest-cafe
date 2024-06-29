import React from 'react';
import bg from '../../assets/kitchen.png';
import CafeButton from '../CafeButton';
import '../../cafe.css';

const Kitchen = () => {

  return (
    <div className="mobile">
      {/* level status bar here! */}

      <div className='bg-container'>
        <img src={bg} alt='kitchen background' className="cafe-bg"></img>
        <div className="oven-button">
          <CafeButton location="/" content="Oven"></CafeButton>
          <CafeButton location="/kitchen-oven" content="←"></CafeButton>
        </div>
      </div>

    </div>
  );


}

export default Kitchen;