import React from 'react';
import { List, ListItemText, ListItemAvatar, Avatar, ListItemButton } from '@mui/material';

const CollectableIngredients = () => {
  return (
    <List
      sx={{ width: '100%', height: '200px', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            {/* image icon of a FLOUR */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Flour" secondary="500 steps" />
      </ListItemButton>

      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            {/* image icon of a MILK */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Milk" secondary="1000 steps" />
      </ListItemButton>

      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            {/* image icon of a SUGAR */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sugar" secondary="1000 steps" />
      </ListItemButton>

      {/* disabled ingredients (not leveled up yet) */}
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            {/* image icon */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Blueberries" secondary="300 steps" />
      </ListItemButton>

      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            {/* image icon */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Strawberries" secondary="700 steps" />
      </ListItemButton>
    </List>
  );
}

export default CollectableIngredients;