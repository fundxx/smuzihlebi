import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
