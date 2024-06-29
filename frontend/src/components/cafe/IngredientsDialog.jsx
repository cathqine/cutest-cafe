import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CollectableIngredients from './CollectableIngredients';
import { Input } from '@mui/material';

import { useState } from 'react';

// for cool transitions
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IngredientsDialog = (props) => {
  const [numsteps, setNumSteps] = useState(20);
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
          Cash in your steps here:
          <Input type="file">xml file upload</Input> {/* make sure it is disabled first */}
          <DialogContentText id="alert-dialog-slide-description">
            You have this many steps/currency: {numsteps} steps
          </DialogContentText>
          <CollectableIngredients></CollectableIngredients>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Collect!</Button> {/* make sure it is disabled first */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default IngredientsDialog;