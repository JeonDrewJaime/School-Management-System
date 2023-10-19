import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import AdminLayout from "./Components/AdminLayout";
import LoginLayout from "./Components/LoginLayout";
import Student from "./Pages/Student"
import Admin from "./Pages/Admin"
// import NotFound from "./Components/NotFound";
// import NoPermission from "./Components/NoPemission";

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
                element: <LoginLayout />,
            },
        ],
    },

    // {
    //     path: '/unauthorized',
    //     element: <NoPermission />

    // },

    // {
    //     path: '*',
    //     element: <NotFound />
    // }
]);

export default router;
