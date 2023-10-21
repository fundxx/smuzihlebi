import React from 'react';
import {Box} from "@mui/system";
import {Typography} from "@mui/material";

const TeamItem = ({id, count, name}) => {
    return (
        <Box sx={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "100%",
            borderRadius: "8px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "secondary.light",
        }}>
            <Typography>
                {id}
            </Typography>
            <Box
                sx={{
                    // marginLeft: "10px",
                    borderRadius: "10px",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "primary.main",
                }}
            />
            <Typography>
                {name}
            </Typography>
        </Box>
    );
};

export default TeamItem;