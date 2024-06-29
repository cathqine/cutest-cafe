import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/left_arrow.png';

const KitchenButton = () => {

  return (
    <>
      <Tooltip title="Kitchen" arrow>
        <IconButton>
          <Link to="/kitchen" style={{ textDecoration: 'none' }}>
            <Button variant='text'>
              <img src={arrow} width="120px"></img>
            </Button>
          </Link>
        </IconButton>
      </Tooltip>
    </>
  );
}

export default KitchenButton;