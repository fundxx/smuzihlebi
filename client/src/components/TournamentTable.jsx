import React from 'react';
import {Box, Container} from "@mui/system";
import {Typography} from "@mui/material";
import MatchesList from "./MatchesList";

const TournamentTable = () => {
    return (
        <Container>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography variant="h5">Полуфинал</Typography>
                </Box>

                <MatchesList />
            </Box>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography variant="h5">Полуфинал</Typography>
                </Box>

                <MatchesList />
            </Box>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography variant="h5">1/4</Typography>
                </Box>

                <MatchesList />
            </Box>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography variant="h5">1/8</Typography>
                </Box>

                <MatchesList />
            </Box>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography variant="h5">1/16</Typography>
                </Box>

                <MatchesList />
            </Box>
        </Container>
    );
};

export default TournamentTable;