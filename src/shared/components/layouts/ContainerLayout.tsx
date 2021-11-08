import React, {FC} from 'react';
import HeaderPanel from "../header-panel/HeaderPanel";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

type Props = {
    children: any;
}

const ContainerLayout: FC<Props> = ({ children }) => {
    return (
        <Layout className="layout">
            <HeaderPanel />
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
        </Layout>
    );
};

export default ContainerLayout;
