import { Chip, Typography } from "@mui/material";
import { Box, borderRadius, padding } from "@mui/system";
import React from "react";
// import tournamentImage from "./../img/ball.png";

const TournamentsItem = ({}) => {
    return (
        <Box sx={{ padding: "10px", display: "flex" }}>
            <Box
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
                            width: "30px",
                            height: "30px",
                            backgroundColor: "primary.main",
                        }}
                    ></Box>

                    <Typography sx={{ marginLeft: "10px", fontSize: "20px" }}>
                        Название турнира
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "18px" }}>
                        20.10.2023
                    </Typography>

                    <Chip
                        label="ACTIVE"
                        variant="outlined"
                        sx={{ fontSize: "16px", borderColor: "#f85451" }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default TournamentsItem;
