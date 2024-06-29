import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import CollectableIngredients from './CollectableIngredients';
import { Input, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/outside_arrow.png';

const CompleteWalkButton = () => {
  const [open, setOpen] = useState(false);
  const [file,setFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {

      console.log('File to be uploaded:', file);
      // UPLOAD LOGIC
      try {
        const response = await fetch('http://localhost:5000/upload', { // Replace with your backend endpoint
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully');
          // Handle successful upload response
        } else {
          console.error('File upload failed');
          // Handle error response
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      handleClose();
    }
  };

  return (
    <>
      <Tooltip title="Leave Walk" arrow>
        <IconButton onClick={handleClickOpen}>
            <Button variant='text'>
              <img src={arrow} width="120px"></img>
            </Button>
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Upload .xml File"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please upload your step data (.xml file) to proceed.
          </DialogContentText>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ marginTop: '20px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={!file}>
            Upload file
          </Button>
        </DialogActions>
      </Dialog>      
    </>
  );
}

export default CompleteWalkButton;