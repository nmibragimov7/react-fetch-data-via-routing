import React, {Suspense} from "react";

import Fallback from "../components/Fallback/Fallback";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // сервис для логирования
        console.log(error, errorInfo);
    }

    reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            return (
                <Suspense fallback={<Fallback />}>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-red text-center mb-4">Что то пошло не так!(</h1>
                        <h2>
                            <button
                                className="bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"
                                onClick={this.reloadPage}>Обновить страницу</button>
                        </h2>
                    </div>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
