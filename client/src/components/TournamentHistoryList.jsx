import { Box } from "@mui/material";
import React from "react";
import TournamentHistoryItem from "./TournamentHistoryItem";

const TournamentHistoryList = () => {
    const history = [
        {
            tournamentName: "Название первое",
            tournamentTime: "20.10.2023",
            tournamentID: "1",
        },
        {
            tournamentName: "Название второе",
            tournamentTime: "12.10.2023",
            tournamentID: "2",
        },
        {
            tournamentName: "Название третье",
            tournamentTime: "23.10.2023",
            tournamentID: "3",
        },
    ];
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: "10px" }}>
            {history.map((item) => (
                <TournamentHistoryItem
                    tournamentName={item.tournamentName}
                    tournamentTime={item.tournamentTime}
                    key={item.tournamentID}
                />
            ))}
        </Box>
    );
};

export default TournamentHistoryList;
