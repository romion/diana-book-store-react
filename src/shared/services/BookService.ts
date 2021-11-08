import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IBook, IBookResponse} from "../interfaces/IBook";

export const bookAPI = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://di-shop.pp.ua:3000/api'}),
    tagTypes: ['Book'],
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
            providesTags: result => ['Book']
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
