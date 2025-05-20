import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiEdit2, FiPlus, FiTrash2 } from 'react-icons/fi';
import { BACKEND_DOMAIN } from '../../services/constDomain';
import EmployeeModal from './EmployeeModal';
const API_URL = `${BACKEND_DOMAIN}/employee`;

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Función para formatear fechas
  const formatDate = (dateString) => {
    if (!dateString) return 'None';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // Función para manejar valores null
  const displayValue = (value) => {
    return value || 'None';
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get(API_URL);
        setEmployees(res.data);
        setFilteredEmployees(res.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    const filtered = employees.filter(emp => {
      const searchTerm = search.toLowerCase();
      return (
        (emp.name && emp.name.toLowerCase().includes(searchTerm)) ||
        (emp.document && emp.document.toString().includes(searchTerm)) ||
        (emp.phone && emp.phone.toString().includes(searchTerm))
      );
    });
    setFilteredEmployees(filtered);
  }, [employees, search]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setModalOpen(true);
  };

  const handleCreate = () => {
    setEditingEmployee(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <>
      <div className="min-h-screen bg-[#f8f9fc] p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestión de Empleados</h1>

        <div className="bg-white shadow rounded-xl overflow-hidden p-3">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Empleados</h2>
            <p className="text-sm text-gray-500">Gestiona la información de tu equipo</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Buscar por nombre, documento o teléfono"
                className="w-full sm:w-64 px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring focus:ring-blue-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={handleCreate}
              className="bg-gray-900 text-white px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <FiPlus size={16} /> Añadir
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Nombre</th>
                  <th className="px-6 py-3 font-medium">Documento</th>
                  <th className="px-6 py-3 font-medium">Teléfono</th>
                  <th className="px-6 py-3 font-medium">Creado</th>
                  <th className="px-6 py-3 font-medium">Actualizado</th>
                  <th className="px-6 py-3 font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800">{displayValue(emp.name)}</td>
                      <td className="px-6 py-4 text-gray-600">{displayValue(emp.document)}</td>
                      <td className="px-6 py-4 text-gray-600">{displayValue(emp.phone)}</td>
                      <td className="px-6 py-4 text-gray-500">{formatDate(emp.created_at)}</td>
                      <td className="px-6 py-4 text-gray-500">{formatDate(emp.updated_at)}</td>
                      <td className="px-6 py-4 flex gap-2 text-gray-500">
                        <button
                          onClick={() => handleEdit(emp)}
                          className="hover:text-gray-900"
                        >
                          <FiEdit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(emp.id)}
                          className="hover:text-red-600"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                      {search ? 'No se encontraron empleados' : 'No hay empleados disponibles'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 text-sm text-gray-500">
            Mostrando {filteredEmployees.length} de {employees.length} resultados
          </div>
        </div>
      </div>

      {modalOpen && (
        <EmployeeModal
          employee={editingEmployee}
          onClose={handleCloseModal}
          onSave={async (newEmployee) => {
            try {
              if (editingEmployee) {
                await axios.put(`${API_URL}/update/${editingEmployee.id}`, newEmployee);
                const updatedList = employees.map(emp =>
                  emp.id === editingEmployee.id ? { ...emp, ...newEmployee } : emp
                );
                setEmployees(updatedList);
              } else {
                const response = await axios.post(`${API_URL}/create`, newEmployee);
                if (response.data.message === 'Empleado Creado') {
                  const res = await axios.get(API_URL);
                  setEmployees(res.data);
                } else {
                  console.alert(response.data.message)
                }
              }
              handleCloseModal();
            } catch (error) {
              alert(error.response?.data?.message || 'Error al guardar el empleado');
              console.error(error);
            }
          }}
        />
      )}
    </>
  );
};

export default EmployeeTable;