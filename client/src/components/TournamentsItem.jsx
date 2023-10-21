import { Chip, Typography } from "@mui/material";
import { Box, borderRadius, padding } from "@mui/system";
import React from "react";
// import tournamentImage from "./../img/ball.png";

const TournamentsItem = ({
    tournamentName,
    tournamentTime,
    tournamentStatus,
}) => {
    function getChipLabel(tournamentStatus) {
        const labels = {
            active: "##f85451",
            opened: "Социальная жизнь",
            finished: "Жизнь ВУЗа",
        };
        return labels[tournamentStatus];
    }

    const chipLabel = getChipLabel(tournamentStatus);
    return (
        <Box sx={{ padding: "10px", display: "flex" }}>
            <Box
                component="button"
                sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    borderRadius: "15px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.light",
                }}
            >
                {/* <Box
                component="img"
                src={tournamentImage}
                alt="tournamentImage"
            ></Box> */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        sx={{
                            borderRadius: "10px",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "primary.main",
                        }}
                    />

                    <Typography sx={{ marginLeft: "10px", fontSize: "20px" }}>
                        {tournamentName}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "18px", marginRight: "10px" }}>
                        {tournamentTime}
                    </Typography>

                    <Chip
                        label={tournamentStatus.toUpperCase()}
                        variant="outlined"
                        sx={{
                            width: "100px",
                            fontSize: "16px",
                            borderColor: `markers.${tournamentStatus}`,
                            color: `markers.${tournamentStatus}`,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default TournamentsItem;
