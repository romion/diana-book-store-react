import React, {FC} from 'react';
import {Card, Empty} from "antd";

const AdminBooks: FC = () => {
    return (
        <>
            <div className="site-card-border-less-wrapper">
                <Card title="Управление книгами" bordered={false} className="orders-card">
                    <Empty />
                </Card>
            </div>
        </>
    );
};

export default AdminBooks;
