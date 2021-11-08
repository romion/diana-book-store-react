import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from "./components/books/book-list/BookList";

import 'antd/dist/antd.css';
import './styles.css'
import Checkout from "./components/checkout/Checkout";
import BookItem from "./components/books/book-item/BookItem";
import PrivateRoute from "./shared/components/private-route/PrivateRoute";
import Login from "./shared/components/login/Login";
import Profile from "./components/profile/Profile";
import UserProfile from "./components/profile/user-profile/UserProfile";
import Orders from "./components/profile/orders/Orders";
import Accounts from "./components/profile/accounts/Accounts";
import AdminBooks from "./components/profile/admin-books/AdminBooks";
import AdminAddBook from "./components/profile/admin-add-book/AdminAddBook";
import Alerts from "./components/profile/alerts/Alerts";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:id" element={<BookItem />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={<PrivateRoute><Profile /></PrivateRoute>}
                >
                    <Route path="" element={<UserProfile />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="alerts" element={<Alerts />} />
                    <Route path="manage-users" element={<Accounts />} />
                    <Route path="books-all" element={<AdminBooks />} />
                    <Route path="books-add" element={<AdminAddBook />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
