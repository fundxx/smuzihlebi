import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";
import {store} from "../store/store";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme";
import './style/reset.css'

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
