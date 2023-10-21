import React, {useState} from 'react';
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import Icon from '../assets/svg/Icon.svg'
import ButtonUi from "../ui/ButtonUi";

const Header = () => {
    const [username, setUsername] = useState('aboba')
    const [teamName, setTeamName] = useState('aboba team')
    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ height: '80px', display: 'flex', justifyContent: 'space-between', backgroundColor: 'white'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ width: '64px', padding: '0' }}>
                            {<Icon />}
                        </IconButton>
                        <Typography variant="body1" color="text.gray" component="div" sx={{ fontWeight: 600 }}>
                            Крутой футбол
                        </Typography>
                    </Box>
                    <ButtonUi text={'Список команд'} size={'small'}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <Typography variant="body2" color="text.gray" component="div">
                        {teamName}
                    </Typography>
                    <Typography variant="body2" color="text.gray" component="div">
                        {username}
                    </Typography>

                    <Button variant="outlined"
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            onMouseOver={handleClick}
                            sx={{
                                borderRadius: 2,
                                color: 'text.gray',
                                borderColor: 'text.gray',
                                fontSize: '16px'
                            }}
                            size='small'
                    >
                        Профиль
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                    >
                        <MenuItem onClick={handleClose}>Выйти из аккаунта</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;