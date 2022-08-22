import { startLoginWithEmailPassword } from "../firebase/providers";
import { AuthContext } from "./AuthContext"
import { useState } from "react";

export const AuthProvider = ({children}) => {


    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [error, setError] = useState()

    const loginWithEmailPassword = async (email, password) => {
        setIsAuthenticating(true);
        const resp = await startLoginWithEmailPassword(email, password);
        if(resp.ok) {
            setIsAuthenticated(true);
        }else {
            setIsAuthenticated(false);
            setError(resp.errorMessage);
        }
        setIsAuthenticating(false);
    }
    return (
        <AuthContext.Provider value={{error, isAuthenticating, isAuthenticated, setIsAuthenticated, loginWithEmailPassword }}>
            {children}
        </AuthContext.Provider>
    )
}