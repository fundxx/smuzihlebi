import React from "react";
import { Box } from "@mui/system";
import TeamListItem from "./TeamsListItem";

const TeamsList = () => {
    const comands = [
        {
            teamName: "Название первой команды",
            teamID: "1",
        },
        {
            teamName: "Название второй команды",
            teamID: "2",
        },
        {
            teamName: "Название третьей команды",
            teamID: "3",
        },
    ];
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: "10px" }}>
            {comands.map((item) => (
                <TeamListItem teamName={item.teamName} teamID={item.teamID} />
            ))}
        </Box>
    );
};

export default TeamsList;
