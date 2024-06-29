import React, { useEffect, useState } from 'react';
import bg from '../../assets/forest.png';
import '../../cafe.css';
import Thing from '../cafe/Thing';
import { Button, Stack } from '@mui/material';

import flour from '../../assets/flour.png';
import milk from '../../assets/milk.png';
import sugar from '../../assets/sugar.png';

import BackButton from '../cafe/BackButton';

const IngredientsRun = () => {
  const [ing, setIng] = useState('');

  const handleFlourClick = () => {
    alert('Clicked on flour!');
    setIng('flour');
  };

  const handleSugarClick = () => {
    alert('Clicked on Sugar!');
    setIng('sugar');
  };

  const handleMilkClick = () => {
    alert('Clicked on Milk!');
    setIng('milk');
  };

  const handleSubmitClick = () => {
    alert('Clicked on SUBMIT! collecting: ', ing);
  };

  return (
    <>
      <div className="mobile-forest">
        <div className='bg-container'>
          <div className="kitchen-button">
            <BackButton></BackButton>
          </div>
          <img src={bg} alt='forest background' className="forest-bg"></img>

          <div className="ingredients-modal">

            <div className='individual-flour' id='flour' onClick={handleFlourClick}>
              <Stack direction="row">
                <img src={flour} alt='flour' className='ing-icons'></img>
                <div className='ing-txt'>FLOUR</div>
              </Stack>
            </div>

            <div className='individual-sugar' id='sugar' onClick={handleSugarClick}>
              <Stack direction="row">
                <img src={sugar} alt='flour' className='ing-icons'></img>
                <div className='ing-txt'>SUGAR</div>
              </Stack>
            </div>

            <div className='individual-milk' id='milk' onClick={handleMilkClick}>
              <Stack direction="row">
                <img src={milk} alt='flour' className='ing-icons'></img>
                <div className='ing-txt'>MILK</div>
              </Stack>
            </div>

            <div id="submit-to-run" className='individual-submit' onClick={handleSubmitClick}>
              <div className='ing-txt' style={{ marginLeft: "93px" }}>SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IngredientsRun;