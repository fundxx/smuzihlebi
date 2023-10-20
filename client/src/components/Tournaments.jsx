import { Box, Container } from "@mui/system";
import React from "react";
import TournamentsItem from "./TournamentsItem";

const TournamentsList = () => {
    const tournaments = [
        {
            tournamentName: "Название первое",
            tournamentTime: "20.10.2023",
            tournamentStatus: "active",
        },
        {
            tournamentName: "Название второе",
            tournamentTime: "12.10.2023",
            tournamentStatus: "opened",
        },
        {
            tournamentName: "Название третье",
            tournamentTime: "23.10.2023",
            tournamentStatus: "finished",
        },
    ];

    return (
        <Container>
            <TournamentsItem />
        </Container>
    );
};

export default TournamentsList;
