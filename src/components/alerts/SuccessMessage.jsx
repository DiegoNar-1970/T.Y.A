// SuccessMessage.jsx
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { useSectionContractStore } from '../../store/contratState';
import { constTypeContract } from '../formContract/const/constTypeContract';
import ServiceContractPdf from '../formContract/fields/ServiceContractPdf';
import SubsanacionContractPDF from '../formContract/fields/SubsanacionContractPDF';

export default function SuccessMessage({ text, closeAll,message,data}) {
    const { setShowModal,typeContract,dataFormContract } = useSectionContractStore();

    const close = (e) =>{
        e.preventDefault();
        closeAll()
        setShowModal()
    }
  return (
    <div className="bg-green-50 border border-green-100 text-green-800 p-6 rounded-md flex flex-col    gap-4">
      {/* Icon and text */}
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold">Registro exitoso</p>
          <p className="text-sm mt-1">
            {text}
          </p>
          <p className="text-sm mt-1">
             {message}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-6 mt-4 sm:mt-0 sm:ml-auto">
      <PDFDownloadLink 
        document={
          typeContract === constTypeContract.LEGAL_SERVICES || 
          typeContract === constTypeContract.CIVIL ? (
            <ServiceContractPdf  data={data}/>
          ) : (
            <SubsanacionContractPDF data={data} />
          )
        }
        fileName={dataFormContract.fileName}
        style={{ textDecoration: 'none' }}
      >    
        {({loading, error}) => {
          if (error) {
            return (
              <div className="text-red-500">
                Error al generar el PDF. Intente nuevamente.
              </div>
            );
          }
          return (
            <p
            className="text-sm font-semibold cursor-pointer hover:underline"
          >
            {loading ? 'Generando PDF...' : 'Descargar Contrato'}
          </p>
          );
        }}
      </PDFDownloadLink>

        <p
          onClick={close}
          className="text-sm font-semibold cursor-pointer hover:underline"
        >
          Cerrar
        </p>
      </div>
    </div>
  );
}
