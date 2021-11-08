import React, {FC} from 'react';
import {Card, Tag} from "antd";
import {useAuth} from "../../../hooks/useAuth";
import {IUser} from "../../../shared/interfaces/IUser";
import './UserProfile.css'
import moment from "moment";
import {UserOutlined} from "@ant-design/icons";

const UserProfile: FC = () => {
    const auth = useAuth()
    const userInfo: IUser | null = auth.user

    return (
        <>
            <div>
                <Card title="Профиль" bordered={false} className="profile-card">
                    <div className="user-picture" style={{backgroundImage: `url('${userInfo?.avatar}')`}}>
                        {userInfo?.avatar || <UserOutlined className="user-picture__placeholder" />}
                    </div>
                    <div className="user-info">
                        <ul>
                            <li><strong>Имя:</strong> {userInfo?.firstName} {userInfo?.lastName} </li>
                            <li><strong>Права:</strong> <Tag>{userInfo?.role}</Tag></li>
                            <li><strong>Email:</strong> {userInfo?.email}</li>
                            <li><strong>Телефон:</strong> {userInfo?.phone}</li>
                            <li><strong>Дата регистрации:</strong> {moment(userInfo?.createdAt).format('LL')}</li>
                        </ul>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default UserProfile;
