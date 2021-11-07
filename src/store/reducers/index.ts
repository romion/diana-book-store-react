import {combineReducers} from "redux";
import {bookReducer} from "./bookReducer";
import {bookItemReducer} from "./bookItemReducer";

export const rootReducer = combineReducers({
    book: bookReducer,
    bookItem: bookItemReducer
})

export type RootState = ReturnType<typeof rootReducer>
