import {BookAction, BookActionTypes, BookItemState} from "../../types/book";

const initialState: BookItemState = {
    book: null,
    error: null,
    loading: false
}

export const bookItemReducer =  (state = initialState, action: BookAction): BookItemState => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS:
            return {...state, loading: true}
        case BookActionTypes.FETCH_BOOK_ITEM_SUCCESS:
            return {...state, loading: false, book: action.payload}
        case BookActionTypes.FETCH_BOOKS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
