import React, { createContext, useContext, useReducer } from 'react';

import { AuthenticationReducer, initialState } from './AuthenticationReducer';

const AuthenticationStateContext = createContext();
const AuthenticationDispatchContext = createContext();


export const useAuthenticationStateContext = () => {
    const context = useContext(AuthenticationStateContext);

    if (context === undefined) {
        throw new Error('Out of scope: useAuthenticationStateContext must be supplied');
    }

    return context;
}

export const useAuthenticationDispatchContext = () => {
    const context = useContext(AuthenticationDispatchContext);

    if (context === undefined) {
        throw new Error("Out of scope: useAuthenticationDispatchContext must be supplied");
    }

    return context;
};

export const AuthenticationProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthenticationReducer, initialState);

    return (
        <AuthenticationStateContext.Provider value={user}>
            <AuthenticationDispatchContext.Provider value={dispatch}>
                {children}
            </AuthenticationDispatchContext.Provider>
        </AuthenticationStateContext.Provider>
    );
};