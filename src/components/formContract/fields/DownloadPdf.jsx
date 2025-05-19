import { pdf, PDFDownloadLink } from '@react-pdf/renderer'
import React, { useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaLink } from "react-icons/fa6"
import { IoCloseSharp } from 'react-icons/io5'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { TbFileText } from 'react-icons/tb'
import { sendToBackend } from '../../../services/sendPdf'
import { useSectionContractStore } from '../../../store/contratState'
import { ErrorAlert } from '../../alerts/ErrorAlert '
import SuccessMessage from '../../alerts/SuccessMessage'
import { constTypeContract } from '../const/constTypeContract'
import ServiceContractPdf from './ServiceContractPdf'
import SubsanacionContractPDF from './SubsanacionContractPDF'


export const DownloadPdf = () => {

  const { setShowModal,typeContract,dataFormContract,setPdf } = useSectionContractStore();

  const [alertError,SetAlertError]=useState(false);
  const [isLoading,setIsLoading]=useState(false);
  const [errorRes,setErrorRes]=useState(null)
  const [viewButtons,setViewButtons]=useState(true)
  const [linkGenre, setLinkGenre]= useState(undefined);
  const [sendPdfAndEmail, setSendPdfAndEmail]= useState(undefined);


   const createPdfBlod = async () =>{
    if (typeContract === constTypeContract.SUBSANACION) {
      const pdfCreated = await pdf(<SubsanacionContractPDF data={dataFormContract} />).toBlob();
      setPdf(pdfCreated);
      return pdfCreated;

    } else {
      const pdfCreated = await pdf(<ServiceContractPdf data={dataFormContract} />).toBlob();;
      setPdf(pdfCreated);
      return pdfCreated;

    }
      }

  const uploadPdfS3 = async () => {
    try{
      setIsLoading(true); 
      const pdfBlob = await createPdfBlod();
      const response = await sendToBackend(pdfBlob, dataFormContract,'upload');
      const { codeError, message } = response || {};
      if(codeError==='UNKNOWN_ERROR'){
        setErrorRes('Eror Fatal Contacta con el Desarrollador');
        SetAlertError(true);
        setIsLoading(false);
        setViewButtons(false);
      }
        if(codeError || message){
          setErrorRes(message);
          SetAlertError(true);
          setIsLoading(false);
          setViewButtons(false);
          return
        }

        setIsLoading(false)
        setSendPdfAndEmail('Se ha enviado el correo y el email al Cliente')
        setViewButtons(false);
    }catch(error){
      setErrorRes(error.BiMailSendmessage);
      setIsLoading(false);
    }
  }
     

  const uploadWithoutEmail = async () => {
    try {
      setIsLoading(true);
      const pdfBlob = await createPdfBlod();
      const response = await sendToBackend(pdfBlob, dataFormContract,'upload-without-email');
      const { statusCode, message,code } = response || {};
      if(code==='UNKNOWN_ERROR'){
        setErrorRes('Error desconocido');
        SetAlertError(true);
        setIsLoading(false);
        setViewButtons(false);
        return
      }
      if(code || message || statusCode ){
        setErrorRes(message);
        SetAlertError(true);
        setIsLoading(false);
        setViewButtons(false);
        return
      }
        setIsLoading(false);
        setViewButtons(false);
        setLinkGenre(`Link para firmar: ${response.data.linkToSigned}`)
      } catch (error) {
        setErrorRes(error.BiMailSendmessage);
        setIsLoading(false);
      }
    }
    
    
    const handleClick = (e) => {
      e.preventDefault();
      setShowModal();
    };
    
    const closeAll=()=>{
      setErrorRes(false);
      SetAlertError(false);
      setLinkGenre(undefined)
      setSendPdfAndEmail(undefined)
      setViewButtons(true);
  }

  return (
    <div className='text-black p-7 flex flex-col gap-10  relative rounded-2xl
    bg-white '> 
        {isLoading && (<div className="loader"></div>)}
          {alertError && (
            <div className="flex flex-col gap-4 ">
            <ErrorAlert 
              title='Error encontrado '
              errors={[errorRes]}/>
            <div className='flex gap-2 h-[40px] rounded-[20px] items-center justify-center pl-2 pr-2 cursor-pointer  text-red-700 hover:bg-red-400 transition-all ease-in-out duration-300  hover:text-white hover: hover:outline-none ' onClick={closeAll} >
                <RiArrowGoBackFill  className='text-[19px] cursor-pointer '/>
                <button 
                  type="button" 
                  className='text-[px] cursor-pointer'
                  
                  >
                    Volver
                </button>
                </div>
            </div> 
               )}
               {sendPdfAndEmail && (
                <SuccessMessage
                  closeAll={closeAll}
                  text={'Correo enviado correctamente'}
                  message={sendPdfAndEmail}
                  data={dataFormContract}
            />
               )}
               {linkGenre && (
                <SuccessMessage
                  closeAll={closeAll}
                  text={'Link Generado correctamente'}
                  link={linkGenre}
                  data={dataFormContract}
              />
               )}
               {viewButtons &&  (
                 <>
                        <div className='flex flex-col items-center '> 
                        <h1 className='text-2xl font-medium'>Contrato Generado</h1>
                        <p className='text-[#86868b] text-[12px]'>Ya esta casi listo, dale en enviar Correo!</p>
                      </div>
                      <div className="flex gap-2 justify-between " >
                      <div className='flex gap-2 rounded-[20px] justify-center items-center hover:bg-gray-100 pl-2 pr-2 cursor-pointer'>
                      <FaLink className='text-[30px] cursor-pointer'/>
                        <button 
                        onClick={uploadWithoutEmail}
                            type="button" 
                            className='text-[13px] cursor-pointer'
                          >
                            Generar link
                        </button>
                      </div>
                      <PDFDownloadLink 
                        document={
                          typeContract === constTypeContract.LEGAL_SERVICES || 
                          typeContract === constTypeContract.CIVIL ? (
                            <ServiceContractPdf  data={dataFormContract} />
                          ) : (
                            <SubsanacionContractPDF data={dataFormContract}   />
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
                            <div className='flex gap-2 rounded-[20px]  hover:bg-gray-100 p-2 scursor-pointer h-[50x]'>
                              <TbFileText className='text-[30px] cursor-pointer' />
                              <button 
                              className="text-[13px] cursor-pointer"
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
                           bottom-[90%] right-1 transition-all cursor-pointer"
                        />
                      <div className='flex gap-3 text-[15px]  bg-blue-600 text-white rounded-[20px]  hover:bg-blue-400 p-2 '>
                      <BiMailSend className='text-[30px] cursor-pointer'/>
                        <button 
                            type="button" 
                            className='text-[13px] cursor-pointer'
                            onClick={uploadPdfS3}
                          >
                            Enviar Correo
                        </button>
                      </div>
                      </div>
                  </>

               )}
    </div>
  );
}