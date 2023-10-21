import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/img/background.jpg";

const Layout = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <Header />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
