import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextAPI";

export default function AdminLayout() { 

    const {token, role} = useStateContext()
    if(!token || role === null ) { 
        return <Navigate to="/login"/>
    }
    return (
        <div> 
            <Outlet />
        </div>
    )
}