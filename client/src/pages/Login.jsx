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
import {useLoginMutation} from "../../store/slices/auth/authApiSlice";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../store/slices/auth/authSlice";
import {useNavigate} from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {' © '}
            <Link color="inherit" href="https://fantastic-hackathon.ru//">
                Хакатон осень
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {

    const navigation = useNavigate()

    const [isAuthorized, setAuthorized] = useState(false)
    const [isSignIn, setSignIn] = useState(true)

    function switchSignStatus () {
        setSignIn(prevState => !prevState)
    }
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
                            <SignIn onHandleSwitchSignTab={switchSignStatus}/>
                        )
                        :
                        (
                            <SignUp onHandleSwitchSignTab={switchSignStatus}/>
                        )
                }
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}