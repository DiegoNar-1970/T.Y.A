
import React from 'react';
import { TbClipboardSearch, TbContract, TbDatabaseCog } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './sideBar.css';


export const SideBar = () => {

  return (
    <div className=' flex flex-col bg-[#1d1d1f] text-white h-full gap-4 p-3'>
        <div className='flex  gap-4 self-start  justify-center'>
          <img src={logo}
            className="w-[50px] h-[50px] rounded-[100%]" 
            alt="Logo de la empresa" />
            <div className='flex flex-col '>
              <h3 className='text-[19px]'>Trujillo y asociados </h3>
              <h4 className='text-[14px] text-[#86868b] '>Law Group</h4>
            </div>
        </div>
      <nav className='mt-[30px]  text-[17px]'>
          <ul className='flex flex-col gap-2  '>
            <li className='flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all  '>
                <TbClipboardSearch 
                className='w-[30px] h-[30px]' 
                />
                <NavLink 
                  to="/consulta"
                  className=""> Cosulta</NavLink>
            </li>
            <li className='flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all  '>
                <TbContract 
                className='w-[30px] h-[30px]' 
                />
                <NavLink 
                  to="/contratos"
                  className=""> Contrato</NavLink>
            </li>
            <li className='flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all  '>
                <TbDatabaseCog 
                className='w-[30px] h-[30px]' 
                />
                <NavLink 
                  to="/administracion"
                  className=""> Administracion</NavLink>
            </li>
          </ul>
      </nav>
    </div>
  )
}


