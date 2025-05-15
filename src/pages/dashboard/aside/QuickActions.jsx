import React from 'react';
import { IoIosSearch } from 'react-icons/io';

import { PiUsers } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
export const QuickActions = () => {
    const navigate=useNavigate()
  return (
    <section className='p-4 flex flex-col bg-white rounded-[10px] gap-4'>
        <div>
            <h1 className='font-bold text-[25px]'>Acciones rápidas</h1>
            <p className='font-extralight text-[13px] color-l-s' >Accede    rápidamente a las funciones principales
            </p>
        </div>
        <div className="flex flex-col gap-4">
            <div className=" flex border border-gray-100 shadow-md rounded-[20px]
                p-1 bg-hover ease-in-out duration-300 transition-all bg-blue-400
                hover:bg-[#6eb6ff]
            ">
                <IoIosSearch  className='text-[35px]' />
                <button 
                    onClick={()=>navigate('/administracion')}
                    className=" text-[15px]"> Buscar Documentos
                </button>
            </div>
            <div className=" flex border border-gray-100 shadow-md rounded-[20px]
                p-1 bg-hover ease-in-out duration-300 transition-all
            ">
                <PiUsers   className='text-[35px]' />
                <button 
                    className=" text-[15px]"> Buscar Clientes
                </button>
            </div>
        </div>
    </section>
  )
}
