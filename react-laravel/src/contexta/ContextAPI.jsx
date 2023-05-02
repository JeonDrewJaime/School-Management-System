import { createContext, useContext, useState } from "react";

// this context API prevents user/students from accessing other pages without auth
const StateContext =  createContext ({
    student: null,
    stud_token: null,
    setStudent: () => {},
    setToken: () => {}
})

//accepting a children
export const ContextAPI  = ({children}) => {

    //defining functions for state
    const [student, setStudent] = useState({});
    const [stud_token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    //separate function for accepting tokens, this is where we validate and save tokens into local storage
    const setToken = (token) => {

        _setToken(token)

        if(token) { //checks if the token exist and if exist store it into the local storage

            localStorage.setItem('ACCESS_TOKEN', token);

        }else { //on the other hand, if it does not exist therefore there is no access

            localStorage.removeItem('ACCESS_TOKEN')

        }
    }

    return (

        // the value is from the functions above, setToken function is being used rather than the setStudToken because 
        //setToken is the one who haves the value for setStudToken and also checks if that student token exists.
        <StateContext.Provider value={{ 
            student, 
            stud_token, 
            setStudent, 
            setToken 
        }}>

            {children} 
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)

