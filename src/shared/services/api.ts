import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RootState} from "../../store/store";
import {ILoginRequest, IUser, IUserResponse} from "../interfaces/IUser";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://di-shop.pp.ua:3000/api',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            let token = (getState() as RootState).auth.token || localStorage.getItem('token')

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        login: builder.mutation<IUserResponse, ILoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        me: builder.query<IUser, void>({
            query: () => ({
                url: '/auth/me'
            })
        })
    }),
})
