import { TbEye, TbFileText } from 'react-icons/tb';

export default function ActionButtons({ onPreview, onSubmit }) {
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
        <TbFileText className='text-[30px] cursor-pointer' />
        <button 
          className="text-[15px] cursor-pointer"
          type="submit"
          onClick={onSubmit}
        >
          Generar contrato
        </button>
      </div>
    </div>
  );
}