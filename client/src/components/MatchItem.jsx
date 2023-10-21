import { Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import FaceIcon from "@mui/icons-material/Check";

const MatchItem = ({
    matchTime,
    matchStatus,
    matchScore,
    matchDate,
    matchFirstTeam,
    matchSecondTeam,
}) => {
    function getChipLabel(type) {
        const labels = {
            active: "В игре",
            finished: "Завершен",
            opened: "Открыта запись",
        };
        return labels[type];
    }

    return (
        <Grid
            container
            sx={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "secondary.light",
            }}
        >
            <Grid item sm={3} sx={{ display: "flex", alignItems: "center" }}>
                <Typography>{matchTime}</Typography>

                <Chip
                    icon={<FaceIcon />}
                    label={getChipLabel(matchStatus)}
                    size="small"
                    sx={{ fontSize: "18px", marginLeft: "10px" }}
                />
            </Grid>

            <Grid
                item
                sm={6}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography sx={{ width: "170px", textAlign: "right" }}>
                    {matchFirstTeam}
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
                <Typography
                    sx={
                        {
                            // marginLeft: "15px",
                        }
                    }
                >
                    {matchScore}
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
                <Typography
                    sx={{
                        width: "170px",
                        // marginLeft: "15px",
                    }}
                >
                    {matchSecondTeam}
                </Typography>
            </Grid>

            <Grid item sm={3} sx={{ display: "flex", justifyContent: "end" }}>
                <Typography>{matchDate}</Typography>
            </Grid>
        </Grid>
    );
};

export default MatchItem;
