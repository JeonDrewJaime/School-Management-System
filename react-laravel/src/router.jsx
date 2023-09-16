import {Navigate, createBrowserRouter} from 'react-router-dom'
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Login from './Pages/Login';
import DefaultLayout from './Components/DefaultLayout';
import Signup from './Pages/Signup';
import GuessLayout from './Components/GuessLayout';
const router = createBrowserRouter([
    
    {
        
        path:'/',
        element:<GuessLayout />,
        children: [
            
            {
                path:'/',
                element: <Navigate to="/student" />
            },
            
            {
                path:'/student',
                element:<Student />
            },
            
            {
                path:'/admin',
                element:<Admin />
            },
            
        ]
        
    },
    
    {
        
        path:'/',
        element: <DefaultLayout />,
        children: [
                    
            {
                path: '/login',
                element: <Login />
            },
            
            {
                path: '/reg',
                element:<Signup />
            }
        ]
        
    }
    
   


]);

export default router;