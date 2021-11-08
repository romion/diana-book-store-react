import React from 'react';
import {Layout, Menu} from "antd";
import {
    UserOutlined,
    FileAddOutlined,
    ReadOutlined,
    ShoppingOutlined,
    MessageOutlined,
    UsergroupDeleteOutlined
} from "@ant-design/icons";
import FullPageLayout from "../../shared/components/layouts/FullPageLayout";
import {useNavigate, Outlet, useLocation} from "react-router-dom";
import './Profile.css'


const Profile = () => {
    let navigate = useNavigate()
    let location = useLocation()
    const { SubMenu } = Menu
    const { Content, Sider } = Layout
    const currentRoute = location.pathname.split('/').pop() || 'profile';

    return (
        <FullPageLayout>
            <Layout>
                <Sider width={250} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[currentRoute]}
                        defaultOpenKeys={['user', 'admin', 'books']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="user" title="Меню пользователя">
                            <Menu.Item onClick={() => navigate('')} icon={<UserOutlined />} key="profile">Профиль</Menu.Item>
                            <Menu.Item onClick={() => navigate('orders')} icon={<ShoppingOutlined />} key="orders">Мои заказы</Menu.Item>
                            <Menu.Item onClick={() => navigate('alerts')} icon={<MessageOutlined />} key="alerts">Уведомления</Menu.Item>
                        </SubMenu>
                        <SubMenu key="admin" title="Админ панель">
                            <Menu.Item onClick={() => navigate('manage-users')} icon={<UsergroupDeleteOutlined />} key="manage-users">Аккаунты</Menu.Item>
                            <SubMenu key="books" title="Книги">
                                <Menu.Item onClick={() => navigate('books-all')} icon={<ReadOutlined />} key="books-all">Все книги</Menu.Item>
                                <Menu.Item onClick={() => navigate('books-add')} icon={<FileAddOutlined />} key="books-add">Добавить книгу</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </FullPageLayout>
    );
};

export default Profile;
