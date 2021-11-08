import React, {FC} from 'react';
import {Card, Empty} from "antd";

const Accounts: FC = () => {
    return (
        <>
            <div className="site-card-border-less-wrapper">
                <Card title="Аккаунты пользователей" bordered={false} className="orders-card">
                    <Empty />
                </Card>
            </div>
        </>
    );
};

export default Accounts;
