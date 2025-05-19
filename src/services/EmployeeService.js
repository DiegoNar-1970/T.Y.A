import axios from 'axios';

export const getAllEmployees = async () => {
  const API_URL = 'http://localhost:1234/employee'; 
  const res = await axios.get(API_URL)
  return res.data; 
};
//esto retorna getAllEmployees
// [{
//     "id": "98b91b58-b6a0-47d9-b8c3-98f675ae8350",
//     "name": "Juan Pérez",
//     "document": "123",
//     "phone": "3001234567",
//     "created_at": "2025-05-15T17:21:22.786Z",
//     "updated_at": null
//   }]

//ESTO RETORNA 
export const deleteEmployee = async (id) => {
    const API_URL = `http://localhost:1234/employee/${id}`; 
    const res = await axios.delete(API_URL)
    return res.data; 
  };
// {
//   "message": "Empleado eliminado correctamente"
// }
// {
//     "message": "No se encontró ningún empleado",
//     "code": "ID_NOT_FOUND"
//   }
export const UpdateEmployee = async (id) => {
    const API_URL = `http://localhost:1234/employee/update/${id}`; 
    const res = await axios.put(API_URL)
    return res.data; 
  };
// {
//     "message": "No se encontró ningún empleado para actualizar"
//   }

export const createEmploye = async (data) => {
    const API_URL = `http://localhost:1234/employee/create`; 
    const res = await axios.post(API_URL,data)
    return res.data; 
  };
//   {
//     "message": "Este empleado ya existe"
//   }

// {
//     "message": "Empleado Creado"
//   }