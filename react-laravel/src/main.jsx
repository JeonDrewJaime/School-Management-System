import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContextAPI } from "./Context/ContextAPI";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextAPI>
            <RouterProvider router={router} />
        </ContextAPI>
    </React.StrictMode>
);
