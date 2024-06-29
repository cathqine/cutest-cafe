import React from 'react';
import bg from '../../assets/kitchen.png';
import '../../cafe.css';


const KitchenOven = () => {
  return (
    <div className="mobile">
      {/* level status bar here! */}

      <div className='bg-container'>
        <img src={bg} alt='oven background' className="cafe-bg"></img>

      </div>

    </div>
  );

}

export default KitchenOven;