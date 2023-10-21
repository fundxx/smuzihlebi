import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import TournamentsList from "./pages/TournamentsList";
import Layout from "./routes/Layout";
import FourZeroFour from "./pages/FourZeroFour";
import LogIn from "./pages/LogIn";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<div>MainPage</div>} />

            <Route path="/" element={<Layout />}>
                <Route path="/account" element={<Account />} />
                <Route path="/tournament" element={<TournamentsList />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/tournament/:id" element={<div>About</div>} />
                <Route
                    path="/tournament/:id/table"
                    element={<div>About</div>}
                />
                <Route
                    path="/tournament/:id/scheme"
                    element={<div>About</div>}
                />

                <Route path="*" element={<FourZeroFour />} />
            </Route>
        </Routes>
    );
}

export default App;
