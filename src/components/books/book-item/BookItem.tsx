import React from 'react';
import {useParams} from "react-router-dom";
import {Typography, Tag, Image} from "antd";
import Loader from "../../../shared/components/loader/Loader";
import {bookAPI} from "../../../shared/services/BookService";
import ContainerLayout from "../../../shared/components/layouts/ContainerLayout";
import ErrorDisplay from "../../../shared/components/error-display/ErrorDisplay";
import styles from './BookItem.module.css'

const BookItem = () => {
    let { id } = useParams();
    const { Title } = Typography;

    const {data: book, error, isLoading} = bookAPI.useFetchBookByIdQuery(id || '')

    return (
        <ContainerLayout>
            {isLoading && <Loader />}
            {error && <ErrorDisplay errorMessage={JSON.stringify(error)} />}
            {!isLoading && !error &&
                <div className={styles.bookContainer}>
                    <Image className={styles.bookImage} src={book?.picture} alt={book?.name}/>
                    <div className={styles.bookInfo}>
                        <Title level={3}>{book?.name}</Title>
                        <ul>
                            <li><strong>Author:</strong> {book?.author}</li>
                            <li><strong>Genre:</strong> {book?.genre.map(g =>
                                <Tag key={g}>{g}</Tag>
                            )}</li>
                            <li><strong>Pages:</strong> {book?.pages}</li>
                            <li><strong>Price:</strong> ${book?.price}</li>
                            <li><strong>Description:</strong>
                            <p dangerouslySetInnerHTML={{__html: book?.description || ''}}></p></li>
                        </ul>
                    </div>
                </div>
            }
        </ContainerLayout>
    );
};

export default BookItem;
