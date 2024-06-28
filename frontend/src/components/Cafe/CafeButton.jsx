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
          <Button disabled={props.disabled} variant='outlined' color="warning" style={{ backgroundColor: 'aliceblue' }}>
            {props.content}
          </Button>
        </Link>
      </div>
    </>
  );
}

export default CafeButton;