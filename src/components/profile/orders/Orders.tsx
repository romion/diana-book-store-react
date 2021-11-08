import React, {FC} from 'react';
import {Card, Empty} from "antd";

const Orders: FC = () => {
    return (
        <>
            <div className="site-card-border-less-wrapper">
                <Card title="Мои заказы" bordered={false} className="orders-card">
                    <Empty />
                </Card>
            </div>
        </>
    );
};

export default Orders;
