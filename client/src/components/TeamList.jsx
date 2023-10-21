import React from 'react';
import MatchItem from "./MatchItem";
import {Box} from "@mui/system";
import TeamItem from "./TeamItem";

const TeamList = () => {

    const TEAMS = [
        {
            id: 1,
            name: 'team1',
        },
        {
            id: 2,
            name: 'team2',
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
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
            {TEAMS.map((item, index) => (
                <TeamItem id={item.id} count={index} name={item.name} key={item.id}/>
            ))}
        </Box>
    );
};

export default TeamList;