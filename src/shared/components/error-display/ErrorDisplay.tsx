import React, {FC} from 'react';
import {Button, Result, Typography} from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

type Props = {
    errorMessage: string;
}

const ErrorDisplay: FC<Props> = ({errorMessage}) => {
    const navigate = useNavigate()
    const { Paragraph, Text } = Typography;

    return (
        <Result
            status="error"
            title="Произошла ошибка!"
            subTitle={errorMessage}
            extra={[
                <Button key="main" onClick={() => navigate('/')}>Вернуться на главную</Button>,
            ]}
        >
            <div className="desc">
                <Paragraph>
                    <Text
                        strong
                        style={{
                            fontSize: 16,
                        }}
                    >
                        Попробуйте также
                    </Text>
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Перезагрузить страницу
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Немного подождать и вернуться позже
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Сообщить о проблеме через форму обратной связи
                </Paragraph>
            </div>
        </Result>
    );
};

export default ErrorDisplay;
