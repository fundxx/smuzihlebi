import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useEffect, useState} from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Хакатон осень
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {


    const [isAuthorized, setAuthorized] = useState(false)
    const [isSignIn, setSignIn] = useState(true)

    useEffect(()=> {
        (isAuthorized === true) && navigation('/login')
    }, [isAuthorized])

    function switchSignStatus () {
        setSignIn(prevState => !prevState)
    }

    function handleSignIn (event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }
    const handleSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {
                        isSignIn ? 'Вход в аккаунт' : 'Регистрация'
                    }
                </Typography>
                {
                    isSignIn ?
                        (
                            <SignIn onSubmit={handleSignIn} onHandleSwitchSignTab={switchSignStatus}/>
                        )
                        :
                        (
                            <SignUp onSubmit={handleSignUp} onHandleSwitchSignTab={switchSignStatus}/>
                        )
                }
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}