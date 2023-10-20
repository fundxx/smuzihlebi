import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../store/slices/auth/authSlice'
import {apiSlice} from "./slices/api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})