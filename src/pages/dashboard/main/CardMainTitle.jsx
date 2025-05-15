import { useNavigate } from "react-router-dom";

export const CardMainTitle = () => {
  const navigate=useNavigate();
  return (
    <section className='flex justify-between p-4 bg-white items-center
    rounded-[10px] '>
        <div>
            <h1 className='font-bold text-[25px]'>Documentos recientes</h1>
            <p className='font-extralight text-[13px] color-l-s' >Tus últimos documentos subidos o editados</p>
        </div>
        <div className='rounded-[20px] border justify-center items-center flex h-[35px] p-3 hover:bg-gray-200 border-gray-200 shadow-md'>
            <button 
            onClick={()=>navigate('/consulta')}
            className=' '>Ver todos</button>
        </div>
    </section>
  )
}
