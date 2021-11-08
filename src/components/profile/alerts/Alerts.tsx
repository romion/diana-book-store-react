import React, {FC} from 'react';
import {Card, Empty} from "antd";

const Alerts: FC = () => {
    return (
        <>
            <div className="site-card-border-less-wrapper">
                <Card title="Уведомления" bordered={false} className="orders-card">
                    <Empty />
                </Card>
            </div>
        </>
    );
};

export default Alerts;
