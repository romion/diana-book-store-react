import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import styles from './HeaderPanel.module.css'

const HeaderPanel = () => {
    return (
        <Header>
            <h1><Link className={styles.logo} to="/">Book Store</Link></h1>
        </Header>
    );
};

export default HeaderPanel;
