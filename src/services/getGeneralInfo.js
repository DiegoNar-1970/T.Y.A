const url='http://localhost:1234/contract/get-general-info'
import axios from 'axios'
export const getGeneraInfo = async () =>{
    try{
        const {data} = await axios.get(url)
        return data
    }catch(error){
        return error
    }
}