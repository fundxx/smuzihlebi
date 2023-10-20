import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    {/*<MenuIcon />*/}Im an icon
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;