import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

const AuthContext = React.createContext(null);

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = await fakeAuth();
        setToken(token);
        console.log(token);
        navigate('/');
    };

    const handleLogout = () => {
        setToken(null);
        navigate('/');
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider