import React, {createContext, useState} from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const signIn = (newUser, cb) => {
        setUser(newUser);
        cb();
    }
    const logout = (cb) => {
        setUser(null);
        cb();
    }
    const value = {
        user,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
