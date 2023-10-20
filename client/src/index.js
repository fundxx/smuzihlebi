import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";
import {store} from "../store/store";

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