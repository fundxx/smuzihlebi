import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import MatchesList from "../components/MatchesList";

// import kapibara from "./../img/kapibara.jpeg";

const TournamentPage = () => {
    const { id } = useParams();

    return (
        <Container>
            <Box
                sx={{
                    marginTop: "20px",
                    padding: "20px",
                    width: "100%",
                    borderRadius: "15px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.light",
                }}
            >
                <Grid container>
                    <Grid item sm={3}>
                        <Box
                            sx={{
                                borderRadius: "10px",
                                width: "200px",
                                height: "200px",
                                backgroundColor: "primary.main",
                            }}
                        />
                    </Grid>

                    <Grid item sm={9}>
                        <Typography variant="h5">Заголовок</Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae repellendus temporibus fuga debitis? Ea,
                            aperiam corrupti! Fugiat at possimus facilis vel
                            velit voluptates nesciunt eveniet sapiente, natus,
                            itaque, repellendus cupiditate. Reprehenderit sed
                            impedit velit dolore quod ipsum consequatur
                            inventore dicta eveniet nihil! Commodi ut quis quia
                            illum facilis perspiciatis, quo, quisquam odio non
                            sequi a distinctio. Accusamus, deserunt minima.
                            Debitis?
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                <Typography variant="h5">Матчи</Typography>
            </Box>

            <MatchesList />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    size="small"
                    sx={{ textTransform: "none", marginTop: "20px" }}
                >
                    Просмотреть все
                </Button>
            </Box>
        </Container>
    );
};

export default TournamentPage;
