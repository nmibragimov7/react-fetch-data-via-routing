import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error?.statusText || 'Что то пошло не так!('}</h2>
            </div>
        )
    }

    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red text-center mb-4">Что то пошло не так!(</h1>
                <h2>
                    <button
                        className="bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"
                        onClick={reloadPage}>Обновить страницу</button>
                </h2>
            </div>
        </>
    )
};

export default ErrorPage;
