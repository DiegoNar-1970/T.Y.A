// ContractPreview.jsx
import { PDFViewer } from '@react-pdf/renderer';
import { IoCloseSharp } from "react-icons/io5";
import { useSectionContractStore } from '../../../store/contratState';
import { constTypeContract } from '../const/constTypeContract';
import ServiceContractPdf from './ServiceContractPdf';
import SubsanacionContractPDF from './SubsanacionContractPDF';

export const ContractPreview = (() => {

  const { setShowContractPreview, typeContract, dataFormContract} = useSectionContractStore();

  const handleClick=() => {
    setShowContractPreview();
  }

  return (
    <article className='fixed h-full w-full bg-[#fbfbfb72] z-10 left-0 top-0 flex justify-center items-center text-white'>
      <div className='flex w-full h-full justify-center items-center'>
        <PDFViewer width="70%" height="700px">
          {typeContract === constTypeContract .LEGAL_SERVICES || 
           typeContract === constTypeContract.CIVIL ? (
            <ServiceContractPdf  data={dataFormContract}/>
          ) : (
            <SubsanacionContractPDF  data={dataFormContract}/>
          )}
        </PDFViewer>
        <IoCloseSharp 
          onClick={handleClick}
          className='text-red-600 text-[30px] absolute top-5 right-5 cursor-pointer' 
        />
      </div>
    </article>
  );
});

export default ContractPreview