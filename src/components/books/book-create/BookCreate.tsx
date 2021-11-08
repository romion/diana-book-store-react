import React from 'react';
import styles from './BookCreate.module.css'
import {Button, Form, Input, InputNumber, Switch} from "antd";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";

const BookCreate = () => {
    const [form] = Form.useForm();

    const onFinish = (formValue: any) => {
        const bodyReq = {
            ...formValue,
            genre: formValue.genre.replace(/\s/g, '').split(','),
            isBestseller: !!formValue.isBestseller
        }
        console.log(bodyReq);
    };

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
                    name="name"
                    label="Название"
                    rules={[
                        { required: true },
                        { type: 'string', min: 3 }
                    ]}
                >
                    <Input placeholder="Кладбище домашних животных" />
                </Form.Item>

                <Form.Item
                    name="author"
                    label="Автор"
                    rules={[
                        { required: true },
                        { type: 'string', min: 3 }
                    ]}
                >
                    <Input placeholder="Стивен Кинг" />
                </Form.Item>

                <Form.Item
                    name="genre"
                    label="Жанр"
                    rules={[
                        { required: true },
                        { type: 'string', min: 3 }
                    ]}
                >
                    <Input placeholder="ужасы, готика" />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Цена"
                    rules={[
                        { required: true },
                        { type: 'number' }
                    ]}
                >
                    <InputNumber prefix="$" placeholder="30" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Описание"
                    rules={[
                        { required: true },
                        { type: 'string', min: 3 }
                    ]}
                >
                    <TextArea rows={4} placeholder="<p>Развернутое описание книги</p>" />
                </Form.Item>

                <Form.Item
                    name="pages"
                    label="Количество страниц"
                    rules={[{ required: true }]}
                >
                    <InputNumber placeholder="100" />
                </Form.Item>
                <Form.Item
                    name="isBestseller"
                    label="Бестселлер"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Form.Item
                    name="picture"
                    label="URL"
                    rules={[
                        { required: true },
                        { type: 'url', message: 'Invalid URL' },
                        { type: 'string', min: 6 },
                    ]}
                >
                    <Input placeholder="http://imageurl.com/picture.jpg" />
                </Form.Item>
                <Form.Item>
                    <Button
                        className={styles.btnSubmit}
                        type="primary"
                        htmlType="submit"
                    >Отправить</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BookCreate;
