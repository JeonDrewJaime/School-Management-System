import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextAPI";

export default function DefaultLayout() {
    
    const {token, role} = useStateContext()
    if(token && role === 'student') { 
        return <Navigate to="/student" />
    }else if(token && role === 'admin') {
        return <Navigate to="/admin" />

    }
    
    return (
        <div>
            <Outlet />
        </div>
    )
    
} 