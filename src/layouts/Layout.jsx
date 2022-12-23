import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="bg-light-blue">
                <div className="container mx-auto flex justify-center gap-4 py-4 px-8 mb-10">
                    <NavLink to={'/'} className="text-primary-blue font-bold">Пользователи</NavLink>
                    <NavLink to={'/posts'} className="text-primary-blue font-bold">Посты</NavLink>
                </div>
            </div>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;
