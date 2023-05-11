import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextAPI";

export default function DefaultLayout() {
    
    const {token} = useStateContext()
    
    if(token) {
        
        return <Navigate to = "/admin"></Navigate>
    }
    
    return (
        
        <div>
        
            <Outlet />
        
        </div>
    )
    
} 