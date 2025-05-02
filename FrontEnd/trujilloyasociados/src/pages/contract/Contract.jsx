import React from 'react'
import { TbCirclePlus, TbFileX, TbLibraryPlus, TbSearch } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export const Contract = () => {
  return (
    <div className=''>
      <section className='flex justify-between mt-[10px] '>
        <h1 className='text-[30px] '>Panel Administrativo</h1>
        <div className='group flex gap-3 items-center bg-[#0077ed] rounded-[20px] p-3
        hover:bg-[#0d86ffbb] hover:text-black text-white transition-all duration-300'>
          <TbCirclePlus className='text-[25px] group-hover:text-black transition-colors duration-300'/>
          <button>Nuevo Contrato</button>
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
          <div>
            <h2>Generar Contrato</h2>
          </div>
          <section className='flex gap-[1.5rem] flex-wrap'>
            <div className='bg-white rounded-[20px] p-3 gap-4 flex flex-col flex-1 hover:bg-[#ffffff81] transition duration-300 ease-in-out hover:scale-105'>
              <h4 className='text-[20px]'>Contrato Subsanación</h4>
              <span className='text-[13px] text-[#86868b]'>Corregir errores o inconsistencias</span>
              <NavLink to='formularioContrato/subsanacion' className=' hover:bg-[#0077ed]
              group hover:text-white flex gap-2 self-center outline-[1px] rounded-[20px] w-full justify-center p-1 outline-[#b1b1b1] cursor-pointer'>
                <TbFileX className='text-[25px] text-[#007bff] group-hover:text-white' />
                 <button className='cursor-pointer'>Generar</button> 
              </NavLink>
            </div>
            <div className='bg-white rounded-[20px] p-3 gap-4 flex flex-col flex-1 hover:bg-[#ffffff81] transition duration-300 ease-in-out hover:scale-105 '>
              <h4 className='text-[20px]'>Prestacion de Servicios</h4>
              <span className='text-[13px] text-[#86868b]'>Prestacion de nuestros servicios</span>
              <NavLink to='formularioContrato/servicios'  className='hover:bg-[#0077ed]
              group hover:text-white flex gap-2 self-center outline-[1px] rounded-[20px] w-full justify-center p-1 outline-[#b1b1b1] cursor-pointer'>
                <TbLibraryPlus className='text-[25px] text-[#007bff] group-hover:text-white' />
                 <button className='cursor-pointer'>Generar</button> 
              </NavLink>
            </div>
            <div className='bg-white rounded-[20px] p-3 gap-4 flex flex-col  flex-1  hover:bg-[#ffffff81] transition duration-300 ease-in-out hover:scale-105'>
              <h4 className='text-[20px]'>Contrato Juzgado civil</h4>
              <span className='text-[13px] text-[#86868b]'>Contrato civiles</span>
              <NavLink className=' hover:bg-[#0077ed]
              group hover:text-white flex gap-2 self-center outline-[1px] rounded-[20px] w-full justify-center p-1 outline-[#b1b1b1] cursor-pointer'>
                <TbLibraryPlus className='text-[25px] text-[#007bff] group-hover:text-white' />
                 <button className='cursor-pointer'>Generar</button> 
              </NavLink>
            </div>
            <div className='bg-white rounded-[20px] p-3 gap-4 flex flex-col  flex-1 hover:bg-[#ffffff81] transition duration-300 ease-in-out hover:scale-105 '>
              <h4 className='text-[20px]'>Consultar Contrato</h4>
              <span className='text-[13px] text-[#86868b]'>Esta opcion permite consultar un contrato</span>
              <NavLink className='flex gap-2 self-center outline-[1px] rounded-[20px] w-full justify-center p-1 outline-[#b1b1b1] cursor-pointer hover:bg-[#0077ed]
              group hover:text-white'>
                <TbSearch className='text-[25px] text-[#007bff] group-hover:text-white' />
                 <button className='cursor-pointer'>Consultar</button> 
              </NavLink>
            </div>
          </section>
        </article>

      </section>
    </div>
  )
}



