import { TbEye, TbFileText } from 'react-icons/tb';
import { useSectionContractStore } from '../../../store/contratState';
import { Modal } from '../../modal/Modal';

export default function ActionButtons({ onPreview,handleModalOpen }) {
  const { showModal} = useSectionContractStore();
  return (
    <div className='flex justify-end gap-4'>
      <div className='outline-[1px] rounded-[20px] p-1 flex items-center gap-1 hover:bg-[#0d86ffbb] hover:text-white cursor-pointer'>
        <TbEye className='text-[30px] cursor-pointer' />
        <button 
          className="text-[15px] cursor-pointer" 
          onClick={onPreview}
          type="button"
        >
          Vista previa
        </button>
      </div>
      
      <div className='outline-[1px] rounded-[20px] p-1 flex items-center bg-apple text-white gap-1 hover:bg-[#0d86ffbb] cursor-pointer'>
        {showModal === true ? (
          <>
            <Modal />
            <span>Generar Contrato</span>
          </>)
        :
          <div className='flex gap-2'>
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