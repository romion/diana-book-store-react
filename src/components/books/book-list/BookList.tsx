import React, {useState} from 'react';
import {bookAPI} from "../../../shared/services/BookService";
import {useNavigate} from 'react-router-dom';
import {Card, Typography, Row, Col} from 'antd';
import './BookList.css'
import Loader from "../../../shared/components/loader/Loader";
import ContainerLayout from "../../../shared/components/layouts/ContainerLayout";
import ErrorDisplay from "../../../shared/components/error-display/ErrorDisplay";


const BookList = () => {
    let navigate = useNavigate()
    const { Title } = Typography
    const pages = [1, 2, 3, 4, 5]

    const [page, setPage] = useState(1);

    const {data: books, error, isLoading} =  bookAPI.useFetchAllBooksQuery([page, 10])
    // const [createBook, {}] = bookAPI.useCreateBookMutation()
    // const [updateBook, {}] = bookAPI.useUpdateBookMutation()
    // const [deleteBook, {}] = bookAPI.useDeleteBookMutation()

    // const handleCreate = async () => {
    //     const title = prompt()
    //     await createBook({title, body: title} as IBook)
    // }

    // const handleRemove = (book: IBook) => {
    //     deleteBook(book)
    // }
    //
    // const handleUpdate = (book: IBook) => {
    //     updateBook(book)
    // }

    const navigateToBook = (id: string | undefined): void => {
        if (id) {
            navigate('/book/' + id)
        }
    }

    return (
        <ContainerLayout>
            {isLoading && <Loader />}
            {error && <ErrorDisplay errorMessage={JSON.stringify(error)} />}
            {!isLoading && !error &&
                <Row wrap={true} gutter={[16, 16]}>
                    {books?.data?.map(book =>
                        <Col className="book-column" span={4} key={book.id} lg={4} md={6} sm={12} xs={24}>
                            <Card
                                onClick={() => navigateToBook(book.id)}
                                className="book-card"
                                hoverable
                                cover={
                                    <div className="book-picture" style={{backgroundImage: `url(${book.picture})`}}></div>
                                }
                            >
                                <Title level={4}>{book.name}</Title>
                                <p>
                                    <strong>Author:</strong> {book.author}<br/>
                                    <strong>Pages:</strong> {book.pages}<br/>
                                    <strong>Price:</strong> ${book.price}
                                </p>
                            </Card>
                        </Col>
                    )}
                </Row>
            }
            {/*<div style={{display: "flex"}}>*/}
            {/*    {pages.map(p =>*/}
            {/*        <div*/}
            {/*            onClick={() => setPage(p)}*/}
            {/*            key={p}*/}
            {/*            style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10, cursor: 'pointer'}}*/}
            {/*        >*/}
            {/*            {p}*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </ContainerLayout>
    );
};

export default BookList;
