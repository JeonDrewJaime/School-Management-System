import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextAPI";
import axiosClient from "../axios-client";
import { useEffect } from "react";

export default function DefaultLayout() {
    const {token, role, user, setUser} = useStateContext()
    if(!token || role === null) { 
        return <Navigate to="/login" />
    }
    //hook for hooking the student
    useEffect(() => {
        axiosClient.get('student')
            .then(({ data }) => { 
                setUser(data)
            })

    }, [])
    return (
        
        <div>
        
            <Outlet />
        
        </div>
    )
    
} 