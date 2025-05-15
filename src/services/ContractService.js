// services/ContractService.js
import axios from 'axios';

export const getContractsByDate = async (start, end) => {
  const API_URL = 'http://localhost:1234/contract/contracts-by-date'; 
  const res = await axios.get(API_URL, {
    params: {
      start_date: start,
      end_date: end,
    }
  });
  return res.data; // debe devolver { contracts, totalPages, currentPage }
};




// export const getContracts = async (page, limit) => {
//   const res = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
//   return res.data;
// };