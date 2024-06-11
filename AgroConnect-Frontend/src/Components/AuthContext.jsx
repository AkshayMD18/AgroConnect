import React, { createContext, useState, useEffect } from 'react';


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('auth'));
        if (storedUser) {
            setAuth(storedUser);
        }
    }, []);

    const signIn = (user) => {
        setAuth(user);
        localStorage.setItem('auth', JSON.stringify(user));
    };

    const signOut = () => {
        setAuth(null);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{ auth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthContext = createContext();