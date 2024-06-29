import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

const IngButton = (props) => {
  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }
  return (
    <>
      <Link to={location} style={{ textDecoration: 'none' }}>
        <Button>
          {props.content}
        </Button>
      </Link>
    </>
  );
}

export default IngButton;