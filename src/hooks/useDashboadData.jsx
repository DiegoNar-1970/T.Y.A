import { useEffect, useState } from 'react';
import { getGeneraInfo } from '../services/getGeneralInfo';

const STORAGE_KEY = 'dashboardData';
const EXPIRATION_TIME = 5 * 60 * 60 * 1000; // 5 horas

export const useDashboardData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const saved = stored ? JSON.parse(stored) : null;

    // Si los datos existen y no han expirado, se usan
    if (saved && Date.now() - saved.timestamp < EXPIRATION_TIME) {
      setData(saved.data);
    } else {
      // Llamada al backend
      getGeneraInfo()
        .then(response => {
          // Validamos que la respuesta sea válida antes de guardar
          if (response && !response.error) {
            setData(response);
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
              data: response,
              timestamp: Date.now()
            }));
          } else {
            console.error("Respuesta inválida del backend:", response);
          }
        })
        .catch(err => {
          console.error("Error al obtener la información del backend:", err);
        });
    }
  }, []);

  return data;
};
