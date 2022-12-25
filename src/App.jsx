import React from "react";
import {RouterProvider} from "react-router-dom";

import router from "./pages/Pages";
import AuthProvider from "./hoc/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}

export default App;
