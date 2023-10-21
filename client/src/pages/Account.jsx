import { Box } from "@mui/system";
import React, {useState} from "react";
import Profile from "../components/Profile";
import Login from "../components/Login";

const Account = () => {
    
    const [isAuthorized, setAuthorized] = useState(false)
    
    return (
        <>
            {
                isAuthorized ?
                    <Profile />
                    :
                    <Login/>
            }
        </>
    );
};

export default Account;
