import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {setCredentials} from "../../store/slices/auth/authSlice";
import {useRegisterMutation} from "../../store/slices/auth/authApiSlice";
import {useDispatch} from "react-redux";

const SignUp = ({onHandleSwitchSignTab}) => {


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [register, {isLoading}] = useRegisterMutation();
    const dispatch = useDispatch();

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const userData = await register({ email, password, name, surname })
            dispatch(setCredentials({...userData, user: email}))
            setEmail('')
            setPwd('')
            navigation('/account')
        } catch (err) {

        }
    }

    const handleNameInput = (e) => setName(e.target.value)
    const handlesurnameInput = (e) => setSurname(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)
    return (
        <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Имя"
                        autoFocus
                        value={name}
                        onChange={handleNameInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Фамилия"
                        name="lastName"
                        autoComplete="family-name"
                        value={surname}
                        onChange={handlesurnameInput}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Адрес эл.почты"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailInput}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={handlePasswordInput}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                        label="Я хочу получать новости, акции на почту."
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Typography variant="body2" onClick={onHandleSwitchSignTab}>
                        Уже есть аккаунт? Войти
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUp;