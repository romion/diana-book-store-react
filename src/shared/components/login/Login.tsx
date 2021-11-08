import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../slices/authSlice'
import {Button, Form, Input, notification} from "antd";
import Title from "antd/es/typography/Title";
import styles from "../../../components/books/book-create/BookCreate.module.css";
import {api} from "../../services/api";

export const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const openNotification = () => {
        notification.error({
            message: `Ошибка`,
            description: 'Имя пользователя или пароль указаны неверно!',
            placement: 'topRight',
        });
    };

    const [form] = Form.useForm();
    const [login] = api.useLoginMutation()

    const onFinish = async (formValue: any) => {
        console.log(formValue)
        try {
            const user = await login(formValue).unwrap()
            dispatch(setCredentials(user))
            navigate('/')
        } catch (err) {
            openNotification()
        }
    };

    return (
        <div>
            <Title level={2}>Вход в аккаунт</Title>
            <Form
                className={styles.form}
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true },
                        { type: 'email', min: 3 }
                    ]}
                >
                    <Input placeholder="yourmail@gmail.com" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        { required: true },
                        { type: 'string', min: 3 }
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
