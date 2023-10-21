import { Container } from "@mui/material";
import React from "react";
import LoginWindow from "../components/LoginWIndow";

const LogIn = () => {
    return (
        <Container
            sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
            <LoginWindow />
        </Container>
    );
};

export default LogIn;
