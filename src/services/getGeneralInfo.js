import axios from 'axios';
import { BACKEND_DOMAIN } from './constDomain';
const url=`${BACKEND_DOMAIN}/contract/get-general-info`
export const getGeneraInfo = async () =>{
    try{
        const {data} = await axios.get(url)
        return data
    }catch(error){
        return error
    }
}