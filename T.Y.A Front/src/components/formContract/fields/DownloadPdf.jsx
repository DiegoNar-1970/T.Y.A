import { pdf, PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import { FaLink } from "react-icons/fa6"
import { IoCloseSharp } from 'react-icons/io5'
import { TbFileText } from 'react-icons/tb'
import { sendToBackend } from '../../../services/sendToBackend'
import { useSectionContractStore } from '../../../store/contratState'
import { constTypeContract } from '../const/constTypeContract'
import ServiceContractPdf from './ServiceContractPdf'
import SubsanacionContractPDF from './SubsanacionContractPDF'

export const DownloadPdf = () => {

  const { setShowModal,typeContract,dataFormContract,setPdf } = useSectionContractStore();
   const createPdfBlod = async () =>{

    if (typeContract === constTypeContract.SUBSANACION) {
      
      const pdfCreated = await pdf(<SubsanacionContractPDF />).toBlob();
      console.log(pdfCreated)
      setPdf(pdfCreated);
      return pdfCreated;

    } else {

      const pdfCreated = await pdf(<ServiceContractPdf />).toBlob();;
      console.log(pdfCreated)
      setPdf(pdfCreated);
      return pdfCreated;

    }
  };

  const createAndSend = async () =>{
    const pdfBlod = await createPdfBlod();
    //implementamos el enpoind hacia la api y sobelo
    const response = await sendToBackend(pdfBlod,dataFormContract);
    console.log('que responde esto',response)
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal();
  };
  // Genera un nombre de archivo basado en los datos del contrato

  return (
    <div className='text-black p-5 flex flex-col gap-10  relative rounded-2xl
    bg-white '>
      <div className='flex flex-col '>
        <h1 className='text-2xl font-medium'>Contrato Generado</h1>
        <p className='text-[#86868b] text-[12px]'>Se ha enviado un correo con el link Generado</p>
      </div>
      <div className="flex gap-10 justify-between " >
      <div className='flex gap-2 rounded-[20px] justify-center items-center hover:bg-gray-100 pl-2 pr-2'>
      <FaLink className='text-[30px]'/>
        <button 
            type="button" 
            className='text-[13px]'
            onClick={createAndSend}
          >
            Generar link
        </button>
      </div>
      <PDFDownloadLink 
        document={
          typeContract === constTypeContract.LEGAL_SERVICES || 
          typeContract === constTypeContract.CIVIL ? (
            <ServiceContractPdf  />
          ) : (
            <SubsanacionContractPDF  />
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
            <div className='flex gap-3 text-[15px] cursor-pointer bg-blue-600 text-white rounded-[20px]  hover:bg-blue-400 p-2 '>
              <TbFileText className='text-[30px] cursor-pointer' />
              <button 
              className="text-[13px]"
              type="button" 
              >
                {loading ? 'Generando PDF...' : 'Descargar Contrato'}
              </button>
            </div>
          );
        }}
      </PDFDownloadLink>
        <IoCloseSharp  
          onClick={handleClick}
          className=" text-[30px] text-red-400 rounded hover:text-red-600 absolute
           bottom-[80%] right-1 transition-all"
        />
      </div>
    </div>
  );
}