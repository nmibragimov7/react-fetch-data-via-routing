import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import {useAuth} from "../hook/useAuth";

const Layout = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const logoutHandler = () => {
        logout(() => {
            if(user) {
                navigate("/");
                return;
            }
            navigate("/login");
        });
    }

    return (
        <div className="bg-white-blue min-h-screen">
            <div className="bg-blue shadow-gray-100">
                <div className="container mx-auto flex justify-between py-8 px-8 mb-10">
                    <div className="flex gap-6">
                        <NavLink to={'/'} className="text-primary-blue font-bold">Главная</NavLink>
                        <NavLink to={'/posts'} className="text-primary-blue font-bold">Посты</NavLink>
                    </div>
                    <span className="text-primary-blue font-bold cursor-pointer" onClick={logoutHandler}>
                        {user ? 'Выйти' : 'Войти'}
                    </span>
                </div>
            </div>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
