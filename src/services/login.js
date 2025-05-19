import axios from './../hooks/Axios';

export const login = async (data) => {
    const API_URL = 'http://localhost:1234/user/login'; 
    const res = await axios.post(API_URL,data)
    return res.data; 
};
export const verifyToken = async () => {
    const API_URL = 'http://localhost:1234/user/verify-token'; 
    const res = await axios.get(API_URL)
    return res.data; 
}; 
export const logout = async () => {
    const API_URL = 'http://localhost:1234/user/logout'; 
    const res = await axios.post(API_URL)
    return res.data; 
}; 