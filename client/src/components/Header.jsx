import React, {useState} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import Icon from '../assets/svg/Icon.svg'
import ButtonUi from "../ui/ButtonUi";

const Header = () => {
    const [username, setUsername] = useState('aboba')
    const [teamName, setTeamName] = useState('aboba team')


    return (
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ height: '80px', display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, width: '64px' }}>
                        {<Icon />}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Крутой футбол
                    </Typography>
                    <ButtonUi text={'Список команд'} size={'small'}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant="p" color="inherit" component="div">
                        {teamName}
                    </Typography>
                    <Typography variant="p" color="inherit" component="div">
                        {username}
                    </Typography>
                    <ButtonUi text={'Профиль'} size={'small'}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;