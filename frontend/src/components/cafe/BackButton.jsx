import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/left_arrow.png';

const BackButton = (props) => {
  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }
  return (
    <>
      <Tooltip title="Back to Cafe" arrow>
        <IconButton>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant='text'>
              <img src={arrow} width="120px"></img>
            </Button>
          </Link>
        </IconButton>
      </Tooltip>
    </>
  );
}

export default BackButton;