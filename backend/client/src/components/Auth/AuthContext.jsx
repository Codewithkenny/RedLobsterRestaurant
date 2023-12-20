import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }) => {
    // Load user data from localStorage on component mount
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [isLoggedIn, setIsLoggedIn] = useState(!!user);

    const login = (userData) => {
        const { token, email } = userData;
        if (!token || !email) {
            throw new Error('Invalid user data for login');
        }
        setUser({ token, email });
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Clear user data from localStorage on logout
        localStorage.removeItem('user');
        setUser(null);
        setIsLoggedIn(false);
    };

    // Save user data to localStorage whenever user changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
