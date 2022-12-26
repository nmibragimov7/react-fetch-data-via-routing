import React from 'react';

const Main = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-primary-blue mb-4">Загрузка данных с помощью роутинга (react-router-dom@6.4.2)</h1>
            <ul className="text-orange text-lg">
                <li>- пропсы loader, action, errorElement</li>
                <li>- хуки createBrowserRouter, createRoutesFromElements, useLoaderData, useAsyncValue, useNavigation</li>
                <li>- утилита defer, redirect</li>
                <li>- компонент Await, Form</li>
            </ul>
        </div>
    );
};

export default Main;
