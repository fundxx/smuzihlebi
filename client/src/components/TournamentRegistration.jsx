import React from 'react';
import {Box, Container} from "@mui/system";
import TeamChooseModal from "./TeamChooseModal";
import {Typography} from "@mui/material";
import MatchesList from "./MatchesList";
import TeamList from "./TeamList";

const TournamentRegistration = () => {
    return (
        <Container sx={{mt: 3}}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    rowGap: "10px",
                    padding: "20px",
                    width: "100%",
                    borderRadius: "15px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.light",
                }}
            >
                <Typography variant="h6">
                    Регистрация команд открыта
                </Typography>
                <TeamChooseModal/>
            </Box>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography variant="h5">Список команд</Typography>
                </Box>

                <TeamList/>
            </Box>
        </Container>
    );
};

export default TournamentRegistration;