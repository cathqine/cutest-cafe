import React from 'react';
import bg from '../../assets/home2.png';
import CafeButton from '../CafeButton';
import '../../cafe.css';
import IngredientsDialog from './IngredientsDialog';
import DisplayCabinetButton from './DisplayCabinetButton';
import KitchenButton from './KitchenButton';
import Thing from './Thing';

const Home = () => {
  // modal pop up for grabbing ingredients
  return (
    <div className="mobile">
      {/* level status bar here! */}

      <div className='bg-container'>
        <img src={bg} alt='cafe background' className="cafe-bg"></img>
        <div className="ingredients-run-button">
          <IngredientsDialog></IngredientsDialog>
          {/* <Thing></Thing> */}
        </div>
        <div className="display-cabinet-button">
          <DisplayCabinetButton></DisplayCabinetButton>
        </div>
        <div className="kitchen-button">
          <KitchenButton></KitchenButton>
        </div>
      </div>

    </div>
  );
}

export default Home;