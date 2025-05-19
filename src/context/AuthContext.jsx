    import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, verifyToken } from '../services/login';


    export const AuthContext = createContext();
    export const useAuth = () =>{

        const context = useContext(AuthContext)
        if(!context){
            throw new Error('Error nse necesita un authProvider');
        }
        return context
    }

    export const AuthProvider = ({children}) =>{
        const [user,setUser] = useState(null); 
        const [isAuth,setIsAuth] = useState(false); 
        const [error,setError] = useState(null); 
        const [isLoading,setIsLoading] = useState(true); 
        

        const loginFunction = async (values)=>{
                setError(null)
                setIsAuth(false)
            try{
                const res = await login(values)
                setUser(res)
                setIsAuth(true)
            }catch(error){
                setError(error?.response?.data?.message)
            }
        
        }

        const logoutFunction = async () => {
            try {
                await logout();
            } catch (err) {
                console.error("Error cerrando sesión:", err);
            } finally {
                setUser(null);
                setIsAuth(false);
                setError(null);
            }
        };


        useEffect(()=>{
            if(error){
                const timer = setTimeout(()=>{
                    setError(null)
                },5000)
                return ()=> clearTimeout(timer)
            }
        },[error])

        useEffect(()=>{
            async function checkLogin(){
                const cookies = Cookies.get()
                if(!cookies.token){
                    setIsAuth(false)
                    setIsLoading(false)
                    setError(null)
                    return setUser(null)
                }
                try{
                    const res = await verifyToken(cookies.token)
                    if(!res){
                        
                        setIsAuth(false)
                        setIsLoading(false)
                        return
                    }
                    
                    setIsAuth(true)
                    setUser(res)
                    setIsLoading(false)
                    return
                }catch(err){
                    setError(err.message)
                    setIsAuth(false)
                    setUser(null)
                    setIsLoading(false)
                    return 
                }
            }
            checkLogin()
        },[])

        return(
            <AuthContext.Provider 
            value={{
                loginFunction,
                user,
                isAuth,
                error,
                isLoading,
                logoutFunction
            }}>
                {children}

            </AuthContext.Provider>
        )
    }