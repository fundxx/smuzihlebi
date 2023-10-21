import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LoginWindow = () => {
    const [login, setLogin] = useState(false);

    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    function changeLogin(value) {
        setPassword("");
        setLogin(value);
    }

    return (
        <Grid
            container
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: 4,
            }}
        >
            <Grid item md={6} display={login ? "block" : "none"}>
                <Box
                    sx={{
                        padding: "25px",
                        borderRadius: 5,
                        width: "100%",
                    }}
                >
                    <Typography
                        sx={{ textAlign: "center" }}
                        component="h2"
                        variant="h4"
                    >
                        Вход
                    </Typography>

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-basic"
                        label="Почта"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-password-input"
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 4,
                        }}
                    >
                        <Button
                            size="medium"
                            sx={{
                                paddingLeft: "25px",
                                paddingRight: "25px",
                                textTransform: "none",
                            }}
                            type="submit"
                            variant="contained"
                        >
                            Войти
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 10,
                        }}
                    >
                        <Button
                            color="secondary"
                            sx={{ color: "black", textTransform: "none" }}
                            onClick={() => changeLogin(false)}
                        >
                            Регистрация
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid item md={6} display={login ? "none" : "block"}>
                <Box
                    sx={{
                        padding: "25px",
                        borderRadius: 5,
                        width: "100%",
                        // borderWidth: "1px",
                        // borderStyle: "solid",
                        // borderColor: "secondary.light",
                        // backgroundColor: "white",
                    }}
                >
                    <Typography
                        sx={{ textAlign: "center" }}
                        component="h2"
                        variant="h5"
                    >
                        Регистрация
                    </Typography>

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-basic"
                        label="Имя"
                        variant="outlined"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-basic"
                        label="Фамилия"
                        variant="outlined"
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                    />

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-basic"
                        label="Почта"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-password-input"
                        label={
                            password === repeatedPassword
                                ? "Пароль"
                                : "* Пароли не совпадают"
                        }
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={password != repeatedPassword}
                    />

                    <TextField
                        sx={{
                            marginTop: 2,
                            width: "100%",
                        }}
                        color="secondary"
                        id="outlined-password-input"
                        label="Повторите пароль"
                        type="password"
                        autoComplete="current-password"
                        value={repeatedPassword}
                        onChange={(e) => setRepeatedPassword(e.target.value)}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 4,
                        }}
                    >
                        <Button
                            color="secondary"
                            size="medium"
                            sx={{
                                paddingLeft: "25px",
                                paddingRight: "25px",
                                textTransform: "none",
                            }}
                            type="submit"
                            variant="contained"
                        >
                            Регистрация
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 4,
                        }}
                    >
                        <Button
                            color="primary"
                            size="medium"
                            sx={{ color: "black", textTransform: "none" }}
                            onClick={() => changeLogin(true)}
                        >
                            Вход
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginWindow;
