import { Box } from "@mui/system";
import React, { Children } from "react";

const Substrate = () => {
    return (
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
            {Children}
        </Box>
    );
};

export default Substrate;
