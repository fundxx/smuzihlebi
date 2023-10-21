import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/img/background.jpg";
import {Container} from "@mui/system";

const Layout = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: "100vh"}}>
            <Header />
            <Container  component="main">
                <Outlet />
            </Container>
        </div>
    );
};

export default Layout;
