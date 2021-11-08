import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bookAPI} from "../shared/services/BookService";
import {authAPI} from "../shared/services/AuthService";
import authReducer from '../shared/slices/authSlice'

const rootReducer = combineReducers({
    [bookAPI.reducerPath]: bookAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    auth: authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(bookAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
