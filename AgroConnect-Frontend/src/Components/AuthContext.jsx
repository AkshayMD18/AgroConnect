import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const signIn = (user) => {
        setAuth(user);
    };

    const signOut = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

