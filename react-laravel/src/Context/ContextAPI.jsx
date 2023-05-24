import { createContext, useContext, useState } from "react";

// this context API prevents user/students from accessing other pages without auth
const StateContext = createContext({
    user: null,
    token: null,
    role: null,
    setUser: () => {},
    setToken: () => {},
    setRole: () => {}
});

//accepting a children
export const ContextAPI = ({ children }) => {
    //defining functions for state
    const [user, setUser] = useState({});
    const [role, _setRole] = useState(localStorage.getItem('USER_ROLE'));
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    //separate function for accepting tokens, this is where we validate and save tokens into local storage
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            //checks if the token exist and if exist store it into the local storage
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            //on the other hand, if it does not exist therefore there is no access
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    const setRole = (role) => { 
        _setRole(role);

        if(role) {
            localStorage.setItem('USER_ROLE', role);
        }else { 
            localStorage.removeItem('USER_ROLE');
        }
    }

    return (
        // the value is from the functions above, setToken function is being used rather than the setStudToken because
        //setToken is the one who haves the value for setStudToken and also checks if that student token exists
        <StateContext.Provider
            value={{
                user,
                token,
                role,
                setUser,
                setRole,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);