import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import BookList from "./components/books/book-list/BookList";

import 'antd/dist/antd.css';
import './styles.css'
import Checkout from "./components/checkout/Checkout";
import HeaderPanel from "./shared/components/header-panel/HeaderPanel";
import BookItem from "./components/books/book-item/BookItem";
import BookCreate from "./components/books/book-create/BookCreate";
import {ProtectedComponent} from "./shared/Protected";
import PrivateRoute from "./shared/PrivateRoute";

const { Header, Content, Footer } = Layout;

const Hooray = () => {
    return (
        <>
            <p>Hooray you logged in!</p>
            <ProtectedComponent />
        </>
    )
}

const App = () => {
    return (
        <Layout className="layout">
            <BrowserRouter>
                <HeaderPanel />
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Routes>
                            <Route path="/" element={<BookList />} />
                            <Route path="/book/create" element={<BookCreate />} />
                            <Route path="/book/:id" element={<BookItem />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route
                                path="/private"
                                element={<PrivateRoute><Hooray /></PrivateRoute>}
                            />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Book Store © 2021 Created by romion</Footer>
            </BrowserRouter>
        </Layout>
    );
};

export default App;
