import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextAPI";

export default function GuessLayout() {
    
    const {token} = useStateContext()
    
    if(!token) {
        
        return <Navigate to = "/login"></Navigate>
    }
    
    return (
        
        <div>
        
            <Outlet />
        
        </div>
    )
    
} 