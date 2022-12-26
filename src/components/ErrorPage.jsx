import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error?.statusText || 'Что то пошло не так!('}</h2>
            </div>
        )
    }

    return error;
};

export default ErrorPage;
