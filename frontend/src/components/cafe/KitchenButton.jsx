import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/left_arrow.png';

const KitchenButton = (props) => {
  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }
  return (
    <>
      <Tooltip title="Kitchen" arrow>
        <IconButton>
          <Link to={location} style={{ textDecoration: 'none' }}>
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