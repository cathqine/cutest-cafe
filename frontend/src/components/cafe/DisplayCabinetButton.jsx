import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/right_arrow.png';

const DisplayCabinetButton = (props) => {
  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }
  return (
    <>
      <Tooltip title="Display Cabinet" arrow>
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

export default DisplayCabinetButton;