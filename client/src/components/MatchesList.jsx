import React from "react";
import MatchItem from "./MatchItem";
import { Box } from "@mui/system";

const MatchesList = () => {
    const matches = [
        {
            matchTime: "19:30",
            matchStatus: "active",
            matchScore: "1:1",
            matchDate: "21.10.2023",
            matchFirstTeam: "Команда 1",
            matchSecondTeam: "Команда 2",
            matchID: "1",
        },
        {
            matchTime: "18:30",
            matchStatus: "finished",
            matchScore: "1:0",
            matchDate: "22.10.2023",
            matchFirstTeam: "Команда 1",
            matchSecondTeam: "Команда 2",
            matchID: "2",
        },
        {
            matchTime: "17:30",
            matchStatus: "opened",
            matchScore: "1:2",
            matchDate: "23.10.2023",
            matchFirstTeam: "Команда 1",
            matchSecondTeam: "Команда 2",
            matchID: "3",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
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
            {matches.map((item) => (
                <MatchItem
                    matchTime={item.matchTime}
                    matchStatus={item.matchStatus}
                    matchScore={item.matchDate}
                    matchFirstTeam={item.matchFirstTeam}
                    matchSecondTeam={item.matchSecondTeam}
                    matchDate={item.matchDate}
                    key={item.matchID}
                />
            ))}
        </Box>
    );
};

export default MatchesList;
