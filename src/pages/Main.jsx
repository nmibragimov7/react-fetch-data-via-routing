import React from 'react';

const Main = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-primary-blue mb-4">Загрузка данных с помощью роутинга (react-router-dom@6.4.2)</h1>
            <ul className="text-orange text-lg">
                <li>- пропсы loader, errorElement</li>
                <li>- хуки createBrowserRouter, createRoutesFromElements</li>
                <li>- утилита defer</li>
                <li>- компонент Await</li>
            </ul>
        </div>
    );
};

export default Main;
