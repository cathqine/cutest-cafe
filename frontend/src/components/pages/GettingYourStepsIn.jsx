import React from 'react';
import LeaveWalkButton from '../cafe/LeaveWalkButton';
import CompleteWalkButton from '../cafe/CompleteWalkButton';
import '../../cafe.css';
import bg from '../../assets/forest.png';

const GettingYourStepsIn = () => {
  return (
    <div className="mobile">
      {/* level status bar here! */}

      <div className='bg-container'>
        <img src={bg} alt='cafe background' className="cafe-bg"></img>
        <div className="leave-walk-button">
          <LeaveWalkButton></LeaveWalkButton>
        </div>
        <div className="complete-walk-button">
          <CompleteWalkButton></CompleteWalkButton>
        </div>
      </div>

    </div>
  );
}

export default GettingYourStepsIn;