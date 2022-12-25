import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useFormik} from "formik";

import {useAuth} from "../hook/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();
    const fromPage = location?.state?.from?.pathname || "/";
    const formik = useFormik({
        initialValues: {
            login: "",
            password: ""
        },
        onSubmit(values) {
            signIn({
                login: values.login
            }, () => {
                navigate(fromPage);
            });
        }
    });

    return (
        <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-blue text-center mb-2">Авторизация</h3>
            <input
                name="login"
                className="input"
                value={formik.values.login}
                onChange={formik.handleChange}
                type="text"
                placeholder="Логин"/>
            <input
                name="password"
                className="input"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="text"
                placeholder="Пароль"/>
            <button
                className="bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"
                onClick={formik.handleSubmit}>
                Авторизоваться
            </button>
        </div>
    );
};

export default Login;
