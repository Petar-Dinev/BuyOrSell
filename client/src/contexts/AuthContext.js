import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import * as userService from '../services/userService'


const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const [userData, setUserData] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const token = userData.accessToken;

    const onLoginSubmit = async (data) => {
        try {
            const result = await userService.login(data)
            setUserData(result);
            navigate('/catalog')
        } catch(err) {
            console.log(err);
        }
    }

    const onRegisterSubmit = async (data) => {
        const {confirmPassword, ...registerData} = data;
        if(confirmPassword !== registerData.password) {
            return
        }

        try {
            const result = await userService.register(registerData);
            setUserData(result)
            navigate('/catalog')
        } catch(err) {
            console.log(err);
        }
    }

    const onLogout = async () => {
        await userService.logout();

        setUserData({})
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userData,
        token,
        isAuthenticated: !!userData.accessToken,
    };


    return (
        <>
        <AuthContext.Provider value={contextValues} >
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context;
}
