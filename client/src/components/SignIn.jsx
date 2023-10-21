import React from 'react';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SignIn = ({onSubmit, onHandleSwitchSignTab}) => {
    return (
        <Box component="form" onSubmit={onSubmit} noValidate sx={{mt: 1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Эл. Почта"
                name="email"
                autoComplete="email"
                autoFocus
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