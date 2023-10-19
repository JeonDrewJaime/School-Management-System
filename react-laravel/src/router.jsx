import {Navigate, createBrowserRouter} from 'react-router-dom'
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Login from './Pages/Login';
import DefaultLayout from './Components/DefaultLayout';
import LoginLayout from './Components/LoginLayout';
import AdminLayout from './Components/AdminLayout';
const router = createBrowserRouter([
    
    {
        
        path:'/',
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
        ]
        
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
        ],
    },

    
]);

export default router;