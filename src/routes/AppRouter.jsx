import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import { AuthContext } from "../context/AuthContext";
import { useCheckingAuth } from "../hooks/useCheckingAuth";
import { Images } from "../Images";


export const AppRouter = () => {

    
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    useCheckingAuth(setIsAuthenticated);

    return (
        <Routes>

            { isAuthenticated && <Route path="/images" element={<Images />} /> }
            
            <Route path="/home" element={<App />} />
            
            
            <Route path="/*" element={ <Navigate to='/home' /> } />


        </Routes>
    );
}