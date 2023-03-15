import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            </Typography>
            <Button color="inherit"><Link to="/" style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
            <Button color="inherit"><Link to ={"Signup"}>Signup</Link></Button>
            <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
      </Box>
     )
}

export default Navbar
