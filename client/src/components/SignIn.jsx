import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../../store/slices/auth/authApiSlice";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../store/slices/auth/authSlice";

const SignIn = ({onHandleSwitchSignTab}) => {
    const navigation = useNavigate()

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const [login, {isLoading}] = useLoginMutation();
    const dispatch = useDispatch();

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const userData = await login({ email: email, password: pwd })
            dispatch(setCredentials({...userData, user: email}))
            setEmail('')
            setPwd('')
            navigation('/account')
        } catch (err) {

        }
    }

    const handleUserInput = (e) => setEmail(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)
    console.log(email)
    console.log(pwd)

    return (
        <Box component="form" onSubmit={handleSignIn} noValidate sx={{mt: 1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Эл. Почта"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleUserInput}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={pwd}
                onChange={handlePwdInput}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Войти
            </Button>
            <Grid container>
                <Grid item>
                    <Typography variant="body2" onClick={onHandleSwitchSignTab}>
                        {"Нет аккаунта? Зарегистрироваться"}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignIn;