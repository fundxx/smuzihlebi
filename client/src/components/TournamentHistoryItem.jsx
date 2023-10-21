import { Box, Typography } from "@mui/material";
import React from "react";

const TournamentHistoryItem = ({ tournamentName, tournamentTime }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "secondary.light",
                background: "#ffffff",
                backdropFilter: "none",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                    sx={{
                        borderRadius: "10px",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "primary.main",
                    }}
                />

                <Typography sx={{ marginLeft: "10px", fontSize: "16px" }}>
                    {tournamentName}
                </Typography>
            </Box>

            <Typography>{tournamentTime}</Typography>
        </Box>
    );
};

export default TournamentHistoryItem;
