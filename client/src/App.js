import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Comp />} />
            <Route path="/about" element={<Comp />} />
        </Routes>
    );
}

export default App;
