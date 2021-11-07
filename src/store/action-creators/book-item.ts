import {Dispatch} from "redux";
import axios from "axios";
import {BookAction, BookActionTypes} from "../../types/book";

export const fetchBookItem = (id: string | undefined) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            dispatch({type: BookActionTypes.FETCH_BOOKS})
            const response = await axios.get('https://di-shop.pp.ua:3000/api/books/' + id)
            console.log(response);
            dispatch({type: BookActionTypes.FETCH_BOOK_ITEM_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: BookActionTypes.FETCH_BOOKS_ERROR,
                payload: 'BookItem fetch error'
            })
        }
    }
}
