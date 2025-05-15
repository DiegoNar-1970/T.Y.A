import React, { useState } from 'react';
import { FaClipboardList, FaExclamationTriangle, FaFileAlt, FaSearch } from 'react-icons/fa';

const Consult = () => {
  // Estado para el tipo de búsqueda (radicado o contrato)
  const [searchType, setSearchType] = useState('contract');
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para los resultados de búsqueda
  const [searchResults, setSearchResults] = useState([]);
  // Estado para errores
  const [error, setError] = useState(null);
  // Estado para carga
  const [loading, setLoading] = useState(false);

  // Datos simulados
  

  // Función para manejar la búsqueda
  const handleSearch = () => {
    setLoading(true);
    setError(null);
  }

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    setSearchTerm('');
    setSearchResults([]);
    setError(null);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Contratos</h1>
      <p className="text-gray-600 mb-6">Gestiona la información de contratos y radicados</p>

      {/* Formulario de búsqueda */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleSearchTypeChange('contract')}
            className={`px-4 py-2 rounded-md flex items-center ${searchType === 'contract' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <FaClipboardList className="mr-2" />
            Número de Contrato
          </button>
          <button
            onClick={() => handleSearchTypeChange('radicado')}
            className={`px-4 py-2 rounded-md flex items-center ${searchType === 'radicado' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <FaFileAlt className="mr-2" />
            Número de Radicado
          </button>
        </div>

        <div className="flex-1 flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Ingrese ${searchType === 'contract' ? 'número de contrato' : 'número de radicado'}`}
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md flex items-center disabled:opacity-50"
          >
            <FaSearch className="mr-2" />
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </div>

      {/* Resultados de búsqueda */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex items-center">
            <FaExclamationTriangle className="text-red-500 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Tabla de resultados */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empleado</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demandante</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {searchType === 'contract' ? 'Número de Contrato' : 'Número de Radicado'}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {searchResults.length > 0 ? (
              searchResults.map((contract) => (
                <tr key={contract.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contract.employee}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contract.demandante}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {searchType === 'contract' ? contract.num_contract : contract.num_radicado}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${contract.asigned ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {contract.asigned ? 'Firmado' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                    <button className="text-gray-600 hover:text-gray-900">Descargar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                  {searchTerm ? 'No se encontraron resultados' : 'Realice una búsqueda para ver los resultados'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Contador de resultados */}
      {searchResults.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          Mostrando {searchResults.length} de {searchResults.length} resultados
        </div>
      )}
    </div>
  );
};

export default Consult;