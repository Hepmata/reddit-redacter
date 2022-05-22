import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation, useSearchParams, useParams } from 'react-router-dom';
import axios from 'axios';
const AuthContext = createContext({})

export function AuthContextProvider({
    children
}) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = useParams();

    useEffect(() => {
        if (error) setError(null);
        console.log(searchParams);
    }, [location.pathname])

    function login() {
        axios.post(`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_REDDIT_CLIENT_ID}&redirect_uri=http://localhost:3000&scope=read&response_type=code&state=redacter`
        , {}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => console.log(res))
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