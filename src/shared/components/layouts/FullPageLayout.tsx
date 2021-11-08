import React, {FC} from 'react';
import HeaderPanel from "../header-panel/HeaderPanel";
import {Layout} from "antd";

type Props = {
    children: any;
}

const FullPageLayout: FC<Props> = ({ children }) => {
    return (
        <Layout className="layout">
            <HeaderPanel />
            {children}
        </Layout>
    );
};

export default FullPageLayout;
