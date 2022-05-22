import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
const AuthContext = createContext({})

export function AuthContextProvider({
    children
}) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname])

    function login() {

    }

    function logout() {

    }

    function refresh() {

    }

    return <AuthContext.Provider value={{login, logout, refresh, user}}>
        {children}
    </AuthContext.Provider>
}

export function UserAuth() {
    return useContext(AuthContext);
}