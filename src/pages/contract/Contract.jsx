import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { TbCirclePlus, TbFileX, TbLibraryPlus, TbSearch } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import ContractTable from '../../components/tables/ContractTable';
import { useSectionContractStore } from '../../store/contratState';
import { CardContractType } from './CardContractType';


 const Contract = () => {
  const navigate = useNavigate();
  const {setTypeContract} = useSectionContractStore(); // Assuming you have a store for managing 
  const [renderer,setRenderer]=useState('genre');

  const getContractType = (contractType) => {
    navigate(`formularioContrato`)
    setTypeContract(contractType); // Set the contract type in your store
    //and redirct to contrat form but te value sete
  }

  const buttons = [
    { key: 'genre', label: 'Generar Contratos' },
    { key: 'consult', label: 'Consultar Contratos' },
  ];
  return (
    <div className=''>
      <section className='flex justify-between mt-[10px] p-[1.5rem]'>
        <h1 className='text-[30px] '>Panel Administrativo</h1>
        <div className='group flex gap-3 items-center bg-[#0077ed] rounded-[20px] p-3
        hover:bg-[#0d86ffbb] hover:text-black text-white transition-all duration-300'>
          <TbCirclePlus className='text-[25px] group-hover:text-black transition-colors duration-300'/>
          <button
            onClick={()=>{navigate('formularioContrato')}}
          >Nuevo Contrato</button>
        </div>
      </section>
      <section className='flex flex-col gap-5 p-[1.5rem] '>
        <div className='bg-black text-white p-4 rounded-[17px] 
          flex flex-col justify-center  gap-3 
          '>
          <h1 className='text-[30px] '>Administración simplificada</h1>
          <p
            className=' text-[15px] text-[#b2b2b6] '>
              AdministrGestiona contratos, consultas y clientes con una interfaz intuitiva y elegante. Diseñada para hacer tu trabajo más eficiente.</p>
        </div>
        <article className='flex flex-col gap-4 mt-[50px]'>
          
          <div className='relative flex justify-center items-center gap-2 bg-gray-100 p-2 rounded-[20px]'>
            {buttons.map((btn) => (
              <div
                key={btn.key}
                onClick={() => setRenderer(btn.key)}
                className="relative z-10 cursor-pointer px-4 py-2 rounded-[15px] transition-all duration-300"
              >
                <span className={renderer === btn.key ? 'text-blue-400 font-bold' : 'text-gray-600'}>
                  {btn.label}
                </span>
                {renderer === btn.key && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-blue-400 h-1 shadow-md rounded-[15px] z-[-1] self-end w-[50px] justify-self-center mt-[38px]" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
            { renderer === 'genre' && (
                <section className='flex gap-[1.5rem] flex-wrap'>
            
                <CardContractType 
                  title='Contrato Subsanación'
                  typeContract='subsanacion'
                  Icon={TbFileX}
                />
                <CardContractType 
                  title='Prestacion de nuestros servicios'
                  typeContract='servicios'
                  Icon={TbLibraryPlus}
                />
                <CardContractType 
                  title='Contrato Juzgado civil'
                  typeContract='civil'
                  Icon={TbLibraryPlus}
                /> 
                <div className='bg-white rounded-[20px] p-3 gap-4 flex flex-col  flex-1 hover:bg-[#ffffff81] transition duration-300 ease-in-out hover:scale-105 '>
                  <h4 className='text-[20px]'>Consultar Contrato</h4>
                  <span className='text-[13px] text-[#86868b]'>Esta opcion permite consultar un contrato</span>
                  <div  onClick={()=>navigate('/administracion')} className='flex gap-2 self-center outline-[1px] rounded-[20px] w-full justify-center p-1 outline-[#b1b1b1] cursor-pointer hover:bg-[#0077ed]
                  group hover:text-white'>
                    <TbSearch className='text-[25px] text-[#007bff] group-hover:text-white' />
                     <span 
                      
                     className='cursor-pointer'>Consultar</span> 
                  </div>
                </div>
              </section>
            )}

            {renderer === 'consult'&& (

            <ContractTable />
            )}
        </article>

      </section>
    </div>
  )
}

export default Contract;

