import React, { useState } from 'react';
import { getContractsByDate } from '../../services/ContractService';

const ContractTable = () => {
  const [contracts, setContracts] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [showTable, setShowTable] = useState(false);

  const fetchContracts = async (start, end) => {
    try {
      setError('');
      const data = await getContractsByDate(start, end);
      if (data.length === 0) {
        setError('No se encuentran datos en esas fechas.');
        setContracts([]);
        setShowTable(false);
      } else {
        setContracts(data);
        setShowTable(true);
      }
    } catch (err) {
      setError('Ocurrió un error al obtener los contratos. Inténtalo más tarde.');
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      setError('Debes seleccionar ambas fechas.');
      return;
    }
    fetchContracts(startDate, endDate);
  };

  const resetSearch = () => {
    setStartDate('');
    setEndDate('');
    setError('');
    setShowTable(false);
    setContracts([]);
  };

  return (
    <div className="bg-[#f5f5f7] min-h-screen px-6 py-12 font-sans text-gray-900">
      <div className=" mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-center">Gestión de Contratos</h1>

        {!showTable && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 items-center"
          >
            <div className="w-full flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 font-medium">Desde</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 text-base bg-[#fbfbfd] shadow-inner"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 font-medium">Hasta</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 text-base bg-[#fbfbfd] shadow-inner"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-80 transition"
            >
              Buscar contratos
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        )}

        {showTable && (
          <>
            <div className="flex justify-end mb-4 mt-10">
              <button
                onClick={resetSearch}
                className="text-sm px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
              >
                Volver a buscar
              </button>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
              <table className="min-w-full text-left text-gray-800 text-sm">
                <thead className="text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-4"># Contrato</th>
                    <th className="px-6 py-4">Cliente</th>
                    <th className="px-6 py-4">Empleado</th>
                    <th className="px-6 py-4">Tipo de Contrato</th>
                    <th className="px-6 py-4">Pago</th>
                    <th className="px-6 py-4">Honorario</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4">Fecha</th>
                    <th className="px-6 py-4">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((c) => (
                    <tr
                      key={c.id}
                      className="border-t border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 font-medium">
                        {c.num_contract || c.num_radicado || 'N/A'}
                      </td>
                      <td className="px-6 py-4">{c.customer_name}</td>
                      <td className="px-6 py-4">{c.employee_name || 'Sin asignar'}</td>
                      <td className="px-6 py-4 capitalize">{c.contract_type}</td>
                      <td className="px-6 py-4">${Number(c.total_payment).toLocaleString()}</td>
                      <td className="px-6 py-4">{c.type_pay}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              c.asigned ? 'bg-green-500' : 'bg-red-500'
                            }`}
                          />
                          {c.asigned ? 'Firmado' : 'Pendiente'}
                        </span>
                      </td>
                      <td className="px-6 py-4">{new Date(c.created_at).toLocaleDateString()}</td>
                      <td className="px-6 py-4 flex gap-2 text-sm">
                        <a
                          href={c.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Ver
                        </a>
                        <button
                          onClick={() => console.log('Editar', c.id)}
                          className="text-yellow-600 hover:underline"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => console.log('Eliminar', c.id)}
                          className="text-red-600 hover:underline"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContractTable;
