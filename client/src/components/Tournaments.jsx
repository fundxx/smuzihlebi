import { Box, Container } from "@mui/system";
import React from "react";
import TournamentsItem from "./TournamentsItem";

const TournamentsList = () => {
    const tournaments = [
        {
            tournamentName: "Название первое",
            tournamentTime: "20.10.2023",
            tournamentStatus: "active",
            tournamentID: "1",
        },
        {
            tournamentName: "Название второе",
            tournamentTime: "12.10.2023",
            tournamentStatus: "opened",
            tournamentID: "2",
        },
        {
            tournamentName: "Название третье",
            tournamentTime: "23.10.2023",
            tournamentStatus: "finished",
            tournamentID: "3",
        },
    ];

    return (
        <Container>
            {tournaments.map((item) => (
                <TournamentsItem
                    tournamentName={item.tournamentName}
                    tournamentTime={item.tournamentTime}
                    tournamentStatus={item.tournamentStatus}
                    key={item.tournamentID}
                />
            ))}
        </Container>
    );
};

export default TournamentsList;
