// services/ContractService.js
import axios from 'axios';
import { BACKEND_DOMAIN } from './constDomain';
export const getContractsByDate = async (start, end) => {
  const API_URL = `${BACKEND_DOMAIN}/contract/contracts-by-date`; 
  const res = await axios.get(API_URL, {
    params: {
      start_date: start,
      end_date: end,
    }
  });
  return res.data; // debe devolver { contracts, totalPages, currentPage }
};

export const getAnyContract = async (contract) => {
  const API_URL = `${BACKEND_DOMAIN}/contract/contracts-by-date'`; 
  const res = await axios.get(API_URL,contract )
  return res; // debe devolver { contracts, totalPages, currentPage }
};




// export const getContracts = async (page, limit) => {
//   const res = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
//   return res.data;
// };