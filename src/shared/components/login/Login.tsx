import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../../shared/slices/authSlice'

import { useLoginMutation } from '../../../shared/services/AuthService'
import {LoginRequest} from "../../interfaces/IUser";
import {Button, Form, Input, notification} from "antd";
import {ProtectedComponent} from "../../Protected";
import Title from "antd/es/typography/Title";
import styles from "../../../components/books/book-create/BookCreate.module.css";

function PasswordInput({
                           name,
                           onChange,
                       }: {
    name: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <Input
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                name={name}
                onChange={onChange}
            />
            <Button onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
        </>
    )
}

export const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const openNotification = () => {
        notification.error({
            message: `Error`,
            description:
                'Something goes wrong',
            placement: 'topRight',
        });
    };

    const [form] = Form.useForm();

    const onFinish = (formValue: any) => {
        console.log(formValue);
    };

    const [formState, setFormState] = React.useState<LoginRequest>({
        email: '',
        password: '',
    })

    const [login, { isLoading }] = useLoginMutation()

    const handleChange = ({target: { name, value }}: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({ ...prev, [name]: value }))

    return (
        <div>
            <Title level={2}>Добавить новую книгу</Title>
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
                    <Input.Password placeholder="pswrd" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={async () => {
                            try {
                                const user = await login(formState).unwrap()
                                dispatch(setCredentials(user))
                                navigate('/')
                            } catch (err) {
                                openNotification()
                            }
                        }}
                    >Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
