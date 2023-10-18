import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "./Layouts/LoginLayout";
import Login from "./Components/Login";
import DefaultLayout from "./Layouts/DefaultLayout";
import Student from "./Components/Student";
import Admin from "./Components/Admin";
import Signup from "./Components/Signup";
import AddAdmin from "./Components/AddAdmin";
import AdminLayout from "./Layouts/AdminLayout";
import NotFound from "./Components/NotFound";
import NoPermission from "./Components/NoPemission";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/student" />,
            },

            {
                path: "/student",
                element: <Student />,
            },
        ],
    },

    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <Admin />,
            },
        ],
    },

    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/reg",
                element: <Signup />,
            },

            {
                path: "/regAd",
                element: <AddAdmin />,
            },
        ],
    },

    {
        path: '/unauthorized',
        element: <NoPermission />

    },

    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
