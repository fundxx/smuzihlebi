import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import store from "../store/store";
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);