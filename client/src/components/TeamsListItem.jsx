import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TeamListItem = ({ teamName, teamID }) => {
    return (
        <Box
            sx={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                width: "100%",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "secondary.light",
                background: "#ffffff",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "none",
            }}
        >
            <Typography>{teamID}</Typography>
            <Box
                sx={{
                    borderRadius: "10px",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "primary.main",
                    marginLeft: "10px",
                }}
            />
            <Typography sx={{ marginLeft: "10px" }}>{teamName}</Typography>
        </Box>
    );
};

export default TeamListItem;
