import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import TournamentsList from "./pages/TournamentsList";
import Layout from "./routes/Layout";
import FourZeroFour from "./pages/FourZeroFour";
import MainPage from "./pages/MainPage"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>} />

            <Route path="/" element={<Layout />}>
                <Route path="/account" element={<Account />} />
                <Route path="/tournament" element={<TournamentsList />} />
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
