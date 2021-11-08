import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IUser, IUserToken} from "../interfaces/IUser";
import {RootState} from "../../store/store";

type AuthState = {
    user: IUser | null
    token: string | null
}

const getCashedState = (): AuthState => {
    const cachedUserInfo = localStorage.getItem('user')
    const cachedToken = localStorage.getItem('token')

    if (!cachedUserInfo || !cachedToken) {
        return { user: null, token: null }
    } else {
        return { user: JSON.parse(cachedUserInfo), token: cachedToken }
    }
}

const slice = createSlice({
    name: 'auth',
    initialState: getCashedState(),
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: IUser; token: IUserToken }>
        ) => {
            state.user = user
            state.token = token.accessToken
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token.accessToken)
            console.log(state.user);
            console.log(state.token);
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
