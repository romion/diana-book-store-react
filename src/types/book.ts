export interface BookItem {
    name: string;
    isBestseller: boolean;
    author: string;
    pages: number;
    genre: string[];
    picture: string;
    description: string;
    price: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface BookState {
    books: BookItem[];
    loading:  boolean;
    error: null | string;
    page: number;
    take: number;
}

export interface BookItemState {
    book: BookItem | null;
    loading:  boolean;
    error: null | string;
}

export enum BookActionTypes {
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOK_ITEM_SUCCESS = 'FETCH_BOOK_ITEM_SUCCESS',
    FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
    SET_BOOK_PAGE = 'SET_BOOK_PAGE '
}

interface FetchBookAction {
    type: BookActionTypes.FETCH_BOOKS;
}
interface FetchBookSuccessAction {
    type: BookActionTypes.FETCH_BOOKS_SUCCESS;
    payload: BookItem[];
}
interface FetchBookItemSuccessAction {
    type: BookActionTypes.FETCH_BOOK_ITEM_SUCCESS;
    payload: BookItem | null;
}
interface FetchBookErrorAction {
    type: BookActionTypes.FETCH_BOOKS_ERROR;
    payload: string;
}
interface SetBookPageAction {
    type: BookActionTypes.SET_BOOK_PAGE;
    payload: number;
}

export type BookAction = FetchBookAction | FetchBookSuccessAction | FetchBookErrorAction | SetBookPageAction | FetchBookItemSuccessAction
