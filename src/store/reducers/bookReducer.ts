import {BookAction, BookActionTypes, BookState} from "../../types/book";

const initialState: BookState = {
    books: [],
    page: 1,
    error: null,
    take: 10,
    loading: false
}

export const bookReducer =  (state = initialState, action: BookAction): BookState => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS:
            return {...state, loading: true}
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {...state, loading: false, books: action.payload}
        case BookActionTypes.FETCH_BOOKS_ERROR:
            return {...state, loading: false, error: action.payload}
        case BookActionTypes.SET_BOOK_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}
