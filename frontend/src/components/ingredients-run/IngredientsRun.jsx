import React, { useEffect, useState } from 'react';
import bg from '../../assets/forest.png';
import '../../cafe.css';
import Thing from '../cafe/Thing';
import { Button, Stack } from '@mui/material';

import flour from '../../assets/flour.png';
import milk from '../../assets/milk.png';
import sugar from '../../assets/sugar.png';

import BackButton from '../cafe/BackButton';
import IngButton from './IngButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const IngredientsRun = () => {
  const [ing, setIng] = useState('');
  let location = '/ingredients-run';

  const handleFlourClick = () => {
    setIng('flour');
  };

  const handleSugarClick = () => {
    setIng('sugar');
  };

  const handleMilkClick = () => {
    setIng('milk');
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    alert('Clicked on SUBMIT! collecting: ', ing, e);
    try {
      await axios.post('http://localhost:3000/ingredients-run', { ing });
      alert('File written successfully');
    } catch (error) {
      alert('Error writing file');
    }
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

            <Link to={location} style={{ textDecoration: 'none' }}>
              <div id="submit-to-run" onClick={handleSubmitClick} results={ing} className='ing-txt individual-submit'>
                SUBMIT
              </div>
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default IngredientsRun;