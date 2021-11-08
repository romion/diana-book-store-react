import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Typography, Tag} from "antd";
import './BookItem.css'
import Loader from "../../../shared/components/loader/Loader";
import {bookAPI} from "../../../shared/services/BookService";

const BookItem = () => {
    let { id } = useParams();
    const { Title, Paragraph } = Typography;

    const {data: book, error, isLoading, refetch} = bookAPI.useFetchBookByIdQuery(id || '')

    if (isLoading) {
        return <Loader />
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="book-container">
            <img src={book?.picture} alt={book?.name}/>
            <div className="book-info">
                <Title level={3}>{book?.name}</Title>
                <ul>
                    <li><strong>Author:</strong> {book?.author}</li>
                    <li><strong>Genre:</strong> {book?.genre.map(g =>
                        <Tag>{g}</Tag>
                    )}</li>
                    <li><strong>Pages:</strong> {book?.pages}</li>
                    <li><strong>Price:</strong> ${book?.price}</li>
                    <li><strong>Description:</strong> <p dangerouslySetInnerHTML={{__html: book?.description || '' }}></p></li>
                </ul>
            </div>
        </div>
    );
};

export default BookItem;
