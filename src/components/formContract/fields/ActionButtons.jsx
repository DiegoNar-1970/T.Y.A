import { MdLockReset } from 'react-icons/md';
import { TbEye, TbFileText } from 'react-icons/tb';
import { useSectionContractStore } from '../../../store/contratState';
import { Modal } from '../../modal/Modal';

export default function ActionButtons({ onPreview,handleModalOpen,handleResetForm }) {
  const { showModal} = useSectionContractStore();
  return (
    <div className='flex justify-end gap-4'>
      <div 
      onClick={ handleResetForm }
      className='outline-[1px] rounded-[20px] p-1 flex items-center  text-black gap-1 hover:bg-[#b72727] hover:text-white transition-all duration-300 ease-in-out'>
          <div className='flex gap-2 pr-[10px] pl-[10px]'>
          <MdLockReset className='text-[30px] cursor-pointer' />
            <button 
              
              >reset
            </button>
          </div>
      </div>
      <div className='outline-[1px] rounded-[20px] p-1 flex items-center gap-1 hover:bg-[#0d86ffbb] hover:text-white transition-all duration-300 ease-in-out'>
        <TbEye className='text-[30px] cursor-pointer' />
        <button 
          className="text-[15px] cursor-pointer" 
          onClick={onPreview}
          type="button"
        >
          Vista previa
        </button>
      </div>
      
      <div className='outline-[1px] rounded-[20px] p-1 flex items-center bg-apple text-white gap-1 hover:bg-[#0d86ffbb] transition-all duration-300 ease-in-out'>
        {showModal === true ? (
          <>
            <Modal />
            <span>Generar Contrato</span>
          </>)
        :
          <div className='flex gap-2 putline-[1px] transition-all duration-300 ease-in-out  '>
            <TbFileText className='text-[30px] cursor-pointer' />
            <button 
              onClick={ handleModalOpen }
              >Generar Contrato
            </button>
          </div>
        }
      </div>
    </div>
  );
}