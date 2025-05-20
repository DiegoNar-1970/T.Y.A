import axios from './../hooks/Axios';
import { BACKEND_DOMAIN } from './constDomain';

export const login = async (data) => {
        const API_URL =`${BACKEND_DOMAIN}/user/login`; 
        const res = await axios.post(API_URL,data)
        return res.data;
};
export const verifyToken = async () => {
    const API_URL =`${BACKEND_DOMAIN}/user/verify-token`; 
    const res = await axios.get(API_URL)
    return res.data; 
}; 
export const logout = async () => {
    const API_URL = `${BACKEND_DOMAIN}/user/logout`; 
    const res = await axios.post(API_URL)
    return res.data; 
}; 

export const loginCreate = async () => {
    const user={
        email:'useremployee@gmail.com',
        password_hash:'',
        roles:'employee'
    }
    const API_URL =`${BACKEND_DOMAIN}/user`; 
    const res = await axios.post(API_URL,user)
    return res.data; 
};