import {
    Alert,
    Button,
    Divider,
    Grid,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import { Box, Container, padding } from "@mui/system";
import React from "react";
import TeamsList from "./TeamsList";
import TournamentHistoryList from "./TournamentHistoryList";

const Profile = () => {
    function writeIdToClipboard(item) {
        navigator.clipboard.writeText(item.innerText);
    }

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
                        component="button"
                        sx={{
                            padding: "8px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "secondary.light",
                            borderRadius: "8px",
                            color: "#7879b1",
                            cursor: "pointer",
                            ":hover": {
                                color: "#ffffff",
                                backgroundColor: "#7879b1",
                            },
                        }}
                        onClick={(e) => writeIdToClipboard(e.target)}
                    >
                        51849264
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                <Typography variant="h6">Список команд</Typography>
            </Box>

            <Box
                sx={{
                    marginTop: "20px",
                    padding: "10px",
                    width: "100%",
                    borderRadius: "15px",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderColor: "secondary.light",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(4.1px)",
                }}
            >
                <TeamsList />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                <Typography variant="h6">Создать команду</Typography>
            </Box>

            <Box
                sx={{
                    marginTop: "20px",
                    padding: "20px",
                    width: "100%",
                    borderRadius: "15px",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderColor: "secondary.light",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(4.1px)",
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
                        <Typography
                            sx={{ textAlign: "left", fontSize: "20px" }}
                        >
                            Введите название команды:
                        </Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <TextField
                            id="outlined-basic"
                            label="Название"
                            variant="outlined"
                            sx={{
                                width: "100%",
                            }}
                        />
                    </Grid>
                </Grid>

                <Divider sx={{ marginTop: "20px" }} />

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
                        <Typography
                            sx={{ textAlign: "left", fontSize: "20px" }}
                        >
                            Введите ID участника:
                        </Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <TextField
                            id="outlined-basic"
                            label="ID"
                            variant="outlined"
                            sx={{
                                width: "100%",
                            }}
                        />
                    </Grid>
                </Grid>

                <Divider sx={{ marginTop: "20px" }} />

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
                        <Typography
                            sx={{ textAlign: "left", fontSize: "20px" }}
                        >
                            Загрузите логотип команды:
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        sm={6}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Button
                            variant="contained"
                            disabled
                            size="small"
                            sx={{
                                textTransform: "none",
                                fontSize: "18px",
                                fontWeight: "400",
                            }}
                        >
                            Выбрать
                        </Button>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "400",
                            textTransform: "none",
                        }}
                    >
                        Создать команду
                    </Button>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                <Typography variant="h6">История турниров</Typography>
            </Box>

            <Box
                sx={{
                    marginTop: "20px",
                    padding: "20px",
                    width: "100%",
                    borderRadius: "15px",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderColor: "secondary.light",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(4.1px)",
                }}
            >
                <TournamentHistoryList />
            </Box>
        </Container>
    );
};

export default Profile;
