import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CollectableIngredients from './CollectableIngredients';

import { useState } from 'react';

// for cool transitions
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IngredientsDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='text' color="info" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', fontWeight: 'bold' }} onClick={handleClickOpen}>
        Grab Ingredients
      </Button>
      <Dialog
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ingredients"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            On your way out to collect ingredients
          </DialogContentText>
          <CollectableIngredients></CollectableIngredients>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Let's Go!</Button> {/* make sure it is disabled first */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default IngredientsDialog;