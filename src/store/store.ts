import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bookAPI} from "../shared/services/BookService";
import {api} from "../shared/services/api";
import authReducer from '../shared/slices/authSlice'

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [bookAPI.reducerPath]: bookAPI.reducer,
    auth: authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(
                    api.middleware,
                    bookAPI.middleware
                )
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
