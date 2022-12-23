import React from "react";
import {RouterProvider} from "react-router-dom";

import router from "./pages/Pages";

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
