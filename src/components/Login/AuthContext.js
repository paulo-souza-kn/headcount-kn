import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user , setUser] = useState(null); // Novo estado para armazenar o usuário

    const login = (username) => {
        setIsAuthenticated(true);
        setUser({ username }); // Armazena o nome de usuário
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null); // Reseta o usuário no logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
