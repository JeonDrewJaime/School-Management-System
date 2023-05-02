import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexta/ContextAPI";

export default function DefaultLayout() {
    /*
    const {student, token} = useStateContext()
    
    if(!token) {
        
        return <Navigate to = "/login"></Navigate>
    }
    */
    return (
        
        <div>
        
            <Outlet />
        
        </div>
    )
    
} 