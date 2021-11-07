import {Dispatch} from "redux";
import axios from "axios";
import {BookAction, BookActionTypes} from "../../types/book";

export const fetchBooks = (page = 1, take = 10) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            dispatch({type: BookActionTypes.FETCH_BOOKS})
            const response = await axios.get('https://di-shop.pp.ua:3000/api/books', {
                params: {page: page, take: take}
            })
            console.log(response);
            dispatch({type: BookActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.data})
        } catch (e) {
            dispatch({
                type: BookActionTypes.FETCH_BOOKS_ERROR,
                payload: 'BookList fetch error'
            })
        }
    }
}

export const setBookPage = (page: number) => {
    return {type: BookActionTypes.SET_BOOK_PAGE, payload: page}
}
