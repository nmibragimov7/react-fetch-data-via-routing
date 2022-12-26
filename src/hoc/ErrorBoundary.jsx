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
                    <div className={""}>
                        <div>Что то пошло не так!(</div>
                        <button onClick={this.reloadPage}>Обновить страницу</button>
                    </div>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
