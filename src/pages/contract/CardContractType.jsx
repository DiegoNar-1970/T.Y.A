
import { useNavigate } from "react-router-dom";
import { useSectionContractStore } from "../../store/contratState";

export const CardContractType = ({title,typeContract,Icon,info}) => {
  const navigate=useNavigate()
    const {setTypeContract} = useSectionContractStore(); //

    const getContractType = () => {
      navigate(`formularioContrato`)
        setTypeContract(typeContract); // Set the contract type in your store
        //and redirct to contrat form but te value sete
    }

  return (
    <div className='bg-white rounded-[20px] p-3 gap-4 flex flex-col flex-1 hover:bg-[#ffffff81] transition duration-300 ease-in-out hover:scale-105'>
    <h4 className='text-[20px]'>{title}</h4>
    <span className='text-[13px] text-[#86868b]'>{info}</span>
    <div onClick={getContractType}  className=' hover:bg-[#0077ed]
    group hover:text-white flex gap-2 self-center outline-[1px] rounded-[20px] w-full justify-center p-1 outline-[#b1b1b1] cursor-pointer'>
      <Icon className='text-[25px] text-[#007bff] group-hover:text-white' />
       <span  className='cursor-pointer'>Generar</span> 
    </div>
  </div>
  )
}
