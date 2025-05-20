import axios from 'axios';
import { BACKEND_DOMAIN } from './constDomain';

export const sendSiged = async(img,id) => { 
    const url=`${BACKEND_DOMAIN}/control-files/send-sings/${id}`
    const response = await axios.post(url,{signature:img})
    return response
}