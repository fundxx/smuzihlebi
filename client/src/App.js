import React from 'react';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<div>MainPage</div>} />
            <Route path="/about" element={<div>About</div>} />
        </Routes>
    );
}

export default App;