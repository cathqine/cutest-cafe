import React from 'react';
import bg from '../../assets/kitchen.png';
import KitchenOvenButton from '../cafe/KitchenOvenButton';
import '../../cafe.css';

const Kitchen = () => {

  return (
    <div className="mobile">
      {/* level status bar here! */}

      <div className='bg-container'>
        <img src={bg} alt='kitchen background' className="cafe-bg"></img>
        <div className="kitchen-oven-button">
          <KitchenOvenButton></KitchenOvenButton>
        </div>
      </div>

    </div>
  );

}

export default Kitchen;