import { Box, borderRadius, padding } from "@mui/system";
import React from "react";
// import tournamentImage from "./../img/ball.png";

const TournamentsItem = () => {
    return (
        <Box sx={{ padding: "10px", display: "flex" }}>
            <Box sx={{ display: "flex", width: "100%", borderRadius: "15px" }}>
                {/* <Box
                    component="img"
                    src={tournamentImage}
                    alt="tournamentImage"
                ></Box> */}
                <Box
                    sx={{
                        borderRadius: "10px",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "primary.main",
                    }}
                ></Box>
            </Box>
        </Box>
    );
};

export default TournamentsItem;
