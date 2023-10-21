import React from 'react';
import {Container} from "@mui/material";
import TeamChooseModal from "../components/TeamChooseModal";


const MainPage = () => {
    return (
        <Container maxWidth="sm">
            <TeamChooseModal/>
        </Container>
    );
};

export default MainPage;