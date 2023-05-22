import {Navigate, createBrowserRouter} from 'react-router-dom'
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Login from './Pages/Login';
import DefaultLayout from './Components/DefaultLayout';
const router = createBrowserRouter([
    
    {
        
        path:'/',
        element: <DefaultLayout />,
        children: [
            
            {
                path: '/',
                element: <Navigate to="/login" />
            }, 
            
            {
                path: '/login',
                element: <Login />
            }
        ]
        
    },

    {
        path:'/student',
        element:<Student />
    },
    
    {
        path:'/admin',
        element:<Admin />
    },
]);

export default router;