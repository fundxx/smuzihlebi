import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonUi from "../ui/ButtonUi";
import {useState} from "react";

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TeamChooseModal = () => {
    const [choosenTab, setTab] = useState('start')
    const [open, setOpen] = useState(false);

    function handleSwitchTab (tab) {
        setTab('chooseTeam')
    }

    const tab = {
        start: (
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                    Выбор команды
                </Typography>
                <ButtonUi text={'Выбрать существующую'} onClick={() => handleSwitchTab('chooseTeam')}/>
                <Typography id="modal-modal-description" sx={{my: 1}}>
                    Или
                </Typography>
                <ButtonUi text={'Создать команду'} onClick={() => handleSwitchTab('newTeam')}/>
            </Box>
        ),
        chooseTeam: (
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                    Выбрать команду
                </Typography>
                <Box sx={{}}>
                    aboba выбор команды
                </Box>
            </Box>
        ),
        newTeam: (
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                    Создать команду
                </Typography>
                <Box sx={{}}>
                    aboba создание команды
                </Box>
            </Box>),
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setTab('start')
    };

    return (
        <>
            {/*<Button onClick={handleOpen} sx={{textTransform: 'none'}}>Выбрать команду</Button>*/}
            <ButtonUi onClick={handleOpen} text="Выбрать команду"/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                    tab[choosenTab]
                }
            </Modal>
        </>
    );
};

export default TeamChooseModal;