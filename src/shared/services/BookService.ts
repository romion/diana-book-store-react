import {IBook, IBookResponse} from "../interfaces/IBook";
import {api} from "./api";

export const bookAPI = api.injectEndpoints({
    endpoints: (build) => ({
        fetchAllBooks: build.query<IBookResponse, number[]>({
            query: (params) => ({
                url: `/books`,
                params: {page: params[0], take: params[1]}
            }),
            providesTags: result => ['Book']
        }),
        fetchBookById: build.query<IBook, string>({
            query: (id: string) => ({
                url: `/books/${id}`
            }),
            providesTags: ['Book']
        }),
        createBook: build.mutation<IBook, IBook>({
            query: (book) => ({
                url: `/books`,
                method: 'POST',
                body: book
            }),
            invalidatesTags: ['Book']
        }),
        updateBook: build.mutation<IBook, IBook>({
            query: (book) => ({
                url: `/books/${book.id}`,
                method: 'PUT',
                body: book
            }),
            invalidatesTags: ['Book']
        }),
        deleteBook: build.mutation<IBook, IBook>({
            query: (book) => ({
                url: `/books/${book.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Book']
        }),
    })
})
