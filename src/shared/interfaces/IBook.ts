export interface IBook {
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

export interface IBookResponseMeta {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    itemCount: number;
    page: number;
    pageCount: number;
    take: number;
}

export interface IBookResponse {
    data: IBook[];
    meta: IBookResponseMeta;
}
