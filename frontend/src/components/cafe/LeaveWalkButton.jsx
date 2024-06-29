import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/left_arrow.png';

const LeaveWalkButton = () => {

  return (
    <>
      <Tooltip title="Leave Walk" arrow>
        <IconButton>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant='text'>
              <img src={arrow} width="120px"></img>
            </Button>
          </Link>
        </IconButton>
      </Tooltip>
    </>
  );
}

export default LeaveWalkButton;