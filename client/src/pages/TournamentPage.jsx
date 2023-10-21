import React from 'react';
import {useParams} from "react-router-dom";

const TournamentPage = () => {
    const {id} = useParams()

    return (
        <div>
            TournamentPage {id}
        </div>
    );
};

export default TournamentPage;