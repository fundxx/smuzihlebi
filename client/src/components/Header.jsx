import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import Icon from '../assets/svg/Icon.svg'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ height: '80px', display: 'flex'}}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, width: '64px' }}>
                    {<Icon />}
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;