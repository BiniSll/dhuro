import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export const Header = ()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color='transparent'>
        <Toolbar>
          <Button href="/" variant="contained" color="inherit" sx={{ flexGrow: 4 }} startIcon={<AccessibilityNewRoundedIcon  />}>Dhuro</Button>
          <Button href="/story/create" variant="contained" color="inherit" sx={{ flexGrow: 1 }} startIcon={<AddRoundedIcon  />}>Shto</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}