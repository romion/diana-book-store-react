import React from 'react';
import {Spin} from "antd";
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Spin className={styles.spinner} />Loading...
        </div>
    );
};

export default Loader;
