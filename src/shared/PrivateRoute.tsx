import {useAuth} from "../hooks/useAuth";
import {Navigate, useNavigate} from "react-router-dom";
import React, {FC, ReactNode, useEffect} from "react";
import {Button, Result} from "antd";

type ButtonProps = {
    children: any;

}

const PrivateRoute: FC<ButtonProps> = ({ children }) => {
    const navigate = useNavigate()
    const auth = useAuth()

    useEffect(() => {
        console.log(auth);
    }, [])

    return auth?.user
        ? children
        : <Result
            status="403"
            title="403"
            subTitle="Сори, у вас нет доступа к этой странице. Зайдите в свой аккаунт или вернитесь назад."
            extra={<Button
                type="primary"
                onClick={() => navigate('/')}
            >На главную</Button>}
        />
}

export default PrivateRoute
