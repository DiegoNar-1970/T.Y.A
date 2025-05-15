import { useEffect, useState } from 'react';
import { getGeneraInfo } from '../services/getGeneralInfo';
//este es el acceso a la llave del local storage
const STORAGE_KEY = 'dashboardData';
//5 horas en total 
const EXPIRATION_TIME = 5 * 60 * 60 * 1000; // 5 horas

export const useDashboardData = () => {
    //el estado que sera retornado
    const [data, setData] = useState(null);
    
    useEffect(() => {
        //acedemos y traemos los datos si existen 
        const stored = localStorage.getItem(STORAGE_KEY);
        const saved = stored ? JSON.parse(stored) : null;
        
        if (saved && Date.now() - saved.timestamp < EXPIRATION_TIME) {
            setData(saved.data);
    } else {
        getGeneraInfo().then(response => {
        setData(response);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          data: response,
          timestamp: Date.now()
        }));
      }).catch(console.error);
    }
  }, []);

  return data;
};
