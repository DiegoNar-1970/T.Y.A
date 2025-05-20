import axios from 'axios';
import React, { useState } from 'react';
import { FaClipboardList, FaExclamationTriangle, FaFileAlt, FaFilePdf, FaSearch } from 'react-icons/fa';

const Consult = () => {
  const [searchType, setSearchType] = useState('contract');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!searchTerm.trim()) {
      setError('Por favor, ingresa un número para buscar');
      return;
    }

    setLoading(true);
    setError(null);
    setSearchResult(null);

    try {
      let endpoint = '';
      let params = {};

      if (searchType === 'contract') {
        endpoint = 'https://trujillo-y-asociados.up.railway.app/contract/get-any-contract';
        params = { num_contract: searchTerm };
      } else {
        endpoint = 'https://trujillo-y-asociados.up.railway.app/contract/get-any-contract';
        params = { num_radicado: searchTerm };
      }

      const response = await axios.post(endpoint, params);
      
      if (!response.data) {
        throw new Error('No se encontraron resultados');
      }

      setSearchResult(response.data);
    } catch (err) {
      console.error('Error al consultar:', err);
      setError(err.response?.data?.message || err.message || 'Error al realizar la búsqueda');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    setSearchTerm('');
    setSearchResult(null);
    setError(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No disponible';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  };

  const formatCurrency = (value) => {
    if (!value) return '$0';
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Consultar Contratos</h1>
      <p className="text-gray-600 mb-6">Busca contratos por número de contrato o radicado</p>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => handleSearchTypeChange('contract')}
              className={`px-4 py-2 rounded-md flex items-center ${searchType === 'contract' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              <FaClipboardList className="mr-2" />
              Por Contrato
            </button>
            <button
              type="button"
              onClick={() => handleSearchTypeChange('radicado')}
              className={`px-4 py-2 rounded-md flex items-center ${searchType === 'radicado' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              <FaFileAlt className="mr-2" />
              Por Radicado
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
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md flex items-center disabled:opacity-50"
            >
              <FaSearch className="mr-2" />
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex items-center">
            <FaExclamationTriangle className="text-red-500 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}

      {searchResult && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sección de Información Básica */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Información del {searchType === 'contract' ? 'Contrato' : 'Radicado'}
              </h2>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  {searchType === 'contract' ? (
                    <>Número de Contrato: <span className="font-normal">{searchResult.num_contract || 'No disponible'}</span></>
                  ) : (
                    <>Número de Radicado: <span className="font-normal">{searchResult.num_radicado || 'No disponible'}</span></>
                  )}
                </h3>
                
                {searchResult.num_contract && searchResult.num_radicado && (
                  <p className="text-gray-600 mt-1">
                    {searchType === 'contract' ? (
                      <>Radicado asociado: <span className="font-medium">{searchResult.num_radicado}</span></>
                    ) : (
                      <>Contrato asociado: <span className="font-medium">{searchResult.num_contract}</span></>
                    )}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <p><span className="font-medium">Tipo de Contrato:</span> {searchResult.contract_type || 'No disponible'}</p>
                <p><span className="font-medium">Tipo de Pago:</span> {searchResult.type_pay || searchResult.type_of_payment || 'No disponible'}</p>
                <p><span className="font-medium">Valor Total:</span> {formatCurrency(searchResult.total_payment)}</p>
                <p><span className="font-medium">Fecha Creación:</span> {formatDate(searchResult.contract_created_at || searchResult.info_contract_created_at)}</p>
              </div>

              {searchResult.contract_path && (
                <a 
                  href={searchResult.contract_path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                  <FaFilePdf className="mr-2" /> Ver documento del contrato
                </a>
              )}
            </div>

            {/* Sección de Partes Involucradas */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Empleado Asignado</h3>
                {searchResult.employee_name ? (
                  <div className="mt-2">
                    <p><span className="font-medium">Nombre:</span> {searchResult.employee_name}</p>
                    <p><span className="font-medium">Documento:</span> {searchResult.employee_document}</p>
                  </div>
                ) : (
                  <p className="text-gray-500">No hay empleado asignado</p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Cliente</h3>
                <div className="mt-2">
                  <p><span className="font-medium">Nombre:</span> {searchResult.customer_name || searchResult.customer_name}</p>
                  <p><span className="font-medium">Documento:</span> {searchResult.customer_document || searchResult.customer_document}</p>
                  <p><span className="font-medium">Tipo Doc:</span> {searchResult.customer_doc_type || searchResult.customer_type_of_doc || 'No disponible'}</p>
                  <p><span className="font-medium">Email:</span> {searchResult.customer_email || 'No disponible'}</p>
                  <p><span className="font-medium">Teléfono:</span> {searchResult.customer_phone || 'No disponible'}</p>
                </div>
              </div>

                {searchResult.accused_name ? (
                                <div>
                                <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Demandado</h3>
                                  <div className="mt-2">
                                    <p><span className="font-medium">Nombre:</span> {searchResult.accused_name}</p>
                                    <p><span className="font-medium">Documento:</span> {searchResult.accused_document || searchResult.accused_document}</p>
                                    <p><span className="font-medium">Tipo Doc:</span> {searchResult.accused_doc_type || searchResult.accused_type_of_doc || 'No disponible'}</p>
                                  </div>
                
                                  <p className="text-gray-500">No hay demandado registrado</p>
                
                              </div>
                ): ''}

            </div>
          </div>

          {/* Sección de Observaciones y Estado */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Estado y Observaciones</h3>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                searchResult.asigned ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {searchResult.asigned ? 'Contrato Firmado' : 'Pendiente de Firma'}
              </span>
              
              {searchResult.observation && (
                <p className="text-gray-600">
                  <span className="font-medium">Observaciones:</span> {searchResult.observation || searchResult.contract_observation || 'Ninguna'}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consult;