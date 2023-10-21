import { Grid, TextField, Typography } from "@mui/material";
import { Box, Container, padding } from "@mui/system";
import React from "react";
import TeamsList from "./TeamsList";
import { Button } from "@mui/base";

const Profile = () => {
    return (
        <Container sx={{ marginTop: "10px" }}>
            <Box
                sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    borderRadius: "15px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.light",
                }}
            >
                <Typography>Фамилия Имя Отчество</Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ marginRight: "10px" }}>ID:</Typography>
                    <Box
                        sx={{
                            padding: "5px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "secondary.light",
                            borderRadius: "8px",
                            color: "#7879b1",
                        }}
                    >
                        51849264
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Typography variant="h6">Список команд</Typography>
            </Box>

            <Box
                sx={{
                    padding: "10px",
                    width: "100%",
                    borderRadius: "15px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.light",
                }}
            >
                <TeamsList />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Typography variant="h6">Создать команду</Typography>
            </Box>

            <Box
                sx={{
                    padding: "10px",
                    width: "100%",
                    borderRadius: "15px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.light",
                }}
            >
                <Grid
                    container
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid item sm={6}>
                        <Typography sx={{ textAlign: "left" }}>
                            Введите название команды:
                        </Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{
                                width: "100%",
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid item sm={6}>
                        <Typography sx={{ textAlign: "left" }}>
                            Введите ID участника:
                        </Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{
                                width: "100%",
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid item sm={6}>
                        <Typography sx={{ textAlign: "left" }}>
                            Загрузите логотип команды:
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        sm={6}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Button variant="contained" disbled>
                            Выбрать
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Profile;
