import React from 'react';
import bg from '../../assets/home.png';
import CafeButton from '../CafeButton';
import '../../cafe.css';
import IngredientsDialog from './IngredientsDialog';

const Home = () => {
  // modal pop up for grabbing ingredients


  return (
    <div className="mobile">
      {/* level status bar here! */}

      <div className='bg-container'>
        <img src={bg} alt='cafe background' className="cafe-bg"></img>
        <div className="ingredients-run-button">
          <IngredientsDialog></IngredientsDialog>
          {/* <CafeButton location="/" content="Grab Ingredients"></CafeButton> */}
          <CafeButton location="/ingredients-run" content="↗"></CafeButton>
        </div>
        <div className="display-cabinet-button">
          <CafeButton location="/" content="Display Cabinet"></CafeButton>
          <CafeButton location="/display-cabinet" content="→"></CafeButton>
        </div>
        <div className="kitchen-button">
          <CafeButton location="/" content="Kitchen"></CafeButton>
          <CafeButton location="/kitchen" content="←"></CafeButton>
        </div>
      </div>

    </div>
  );
}

export default Home;