import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import { Card, Typography, Row, Col } from 'antd';
import './BookList.css'
import {Link} from "react-router-dom";
import Loader from "../../../shared/loader/Loader";


const BookList = () => {
    let navigate = useNavigate();
    const { Meta } = Card;
    const { Title, Paragraph } = Typography;

    const {page, error, loading, books, take} = useTypedSelector(state => state.book)
    const {fetchBooks, setBookPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchBooks(page, take)
    }, [page])

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const navigateToBook = (id: string | undefined): void => {
        if (id) {
            navigate('/book/' + id)
        }
    }

    return (
        <div>
            <Row wrap={true} gutter={[16, 16]}>
            {books?.map(book =>
                <Col className="book-column" span={4} key={book.id} lg={4} md={6} sm={12} xs={24}>
                    <Card
                        onClick={() => navigateToBook(book.id)}
                        className="book-card"
                        hoverable
                        cover={
                            <div className="book-picture" style={{ backgroundImage: `url(${book.picture})` }}></div>
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
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div
                        onClick={() => setBookPage(p)}
                        key={p}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10, cursor: 'pointer'}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookList;
