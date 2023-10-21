import React, {useEffect, useState} from "react";
import Profile from "../components/Profile";
import {useNavigate} from "react-router-dom";

const Account = () => {

    const navigation = useNavigate()
    const [isAuthorized, setAuthorized] = useState(true)

    useEffect(()=> {
        (isAuthorized === false) && navigation('/login')
    }, [isAuthorized])
    
    return (
        <>
            <Profile />
        </>
    );
};

export default Account;
