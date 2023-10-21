import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/signIn',
                method: 'POST',
                body: {...credentials}
            })
        }),
        register: builder.mutation({
            query: credentials => ({
                url: '/auth/signUp',
                method: 'POST',
                body: {...credentials}
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApiSlice