import axios from 'axios';

export const sendSiged = async(img,id) => { 
    const url=`http://localhost:1234/control-files/send-sings/${id}`
    const response = await axios.post(url,{signature:img})
    return response
}