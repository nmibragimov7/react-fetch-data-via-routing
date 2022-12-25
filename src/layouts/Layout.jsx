import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="bg-light-blue min-h-screen">
            <div className="bg-primary-blue">
                <div className="container mx-auto flex justify-center gap-6 py-8 px-8 mb-10">
                    <NavLink to={'/'} className="text-light-blue font-bold">Главная</NavLink>
                    <NavLink to={'/posts'} className="text-light-blue font-bold">Посты</NavLink>
                </div>
            </div>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
