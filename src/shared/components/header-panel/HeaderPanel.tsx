import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import styles from './HeaderPanel.module.css'
import {Avatar, Button, Dropdown, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {useAuth} from "../../../hooks/useAuth";
import {setCredentials} from "../../slices/authSlice";
import {useDispatch} from "react-redux";

const HeaderPanel = () => {
    const dispatch = useDispatch()
    const auth = useAuth()
    const navigate = useNavigate()

    const logout = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(setCredentials({ user: null, token: null }))
        navigate('/')
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/profile">Профиль</Link>
            </Menu.Item>
            <Menu.Item>
                <span onClick={(e) => logout(e)}>Выйти</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className={styles.header}>
            <h1><Link className={styles.topMenuLink} to="/">Book Store</Link></h1>
            {auth?.user
                ?
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Link to="/profile">
                        <Avatar
                            className={styles.avatar}
                            size={38}
                            icon={<UserOutlined/>}
                        />
                    </Link>
                </Dropdown>
                :
                <Button onClick={() => navigate('/login')} type="dashed" ghost>Войти</Button>
            }
        </Header>
    );
};

export default HeaderPanel;
