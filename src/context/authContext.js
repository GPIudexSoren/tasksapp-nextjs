import { createContext, useContext, useState } from "react";
import Router from "next/router";
import { getUser } from '../database/dbUsers';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);


    const loginUser = async (credentials) => {
        const user = getUser(credentials.username);

        if (!user) 
            throw new Error('Invalid credentials');

        if (user.password !== credentials.password) 
            throw new Error('Invalid credentials');

        setIsLoggedIn(true);
        setLoggedUser(user);

        await Router.replace('/');
    }

    const logoutUser = async () => {
        setIsLoggedIn(false);
        setLoggedUser(null);

        await Router.replace('/auth/login');
    }

    return <AuthContext.Provider value={
        { 
            isLoggedIn, 
            loggedUser, 
            loginUser,
            logoutUser 
        }
    }>{ children }</AuthContext.Provider>
}

export default AuthProvider;