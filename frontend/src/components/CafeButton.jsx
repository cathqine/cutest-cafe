import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CafeButton = (props) => {
  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }
  return (
    <>
      <div style={{ margin: '1em 0 1em 0' }}>
        <Link to={location} state={{ usersResult: props.results }} style={{ textDecoration: 'none' }}>
          <Button disabled={props.disabled} variant='text' color="info" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', fontWeight: 'bold' }}>
            {props.content}
          </Button>
        </Link>
      </div>
    </>
  );
}

export default CafeButton;