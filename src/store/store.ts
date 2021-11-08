import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bookAPI} from "../shared/services/BookService";

const rootReducer = combineReducers({
    [bookAPI.reducerPath]: bookAPI.reducer
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
