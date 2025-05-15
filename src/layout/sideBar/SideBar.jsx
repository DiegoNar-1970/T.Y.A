
import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { TbClipboardSearch, TbContract, TbDatabaseCog } from "react-icons/tb";
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './sideBar.css';


export const SideBar = () => {
const [selected,setSelected]=useState(null);

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
      <nav className='mt-[30px]  text-[17px] flex flex-col gap-2'>
          <h2 className="text-[17px] pl-2 text-[#86868b] " >Menu</h2>
          <ul className='flex flex-col gap-2  '>
          <li className={`flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all ${(selected ==='dashboard' ? 'bg-[#0077ed] text-black' :'')} `}>
                <MdOutlineDashboard 
                className='w-[30px] h-[30px]' 
                />
                <NavLink
                onClick={()=>setSelected('dashboard')}
                  to="/dashboard"
                  className="text-[15px]"> Dashboard</NavLink>
            </li>
            <li className={`flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all ${(selected ==='consult' ? 'bg-[#0077ed] text-black' :'')}`}>
                <TbClipboardSearch 
                className='w-[30px] h-[30px]' 
                />
                <NavLink 
                  onClick={()=>setSelected('consult')}
                  to="/consulta"
                  className="text-[15px]"> Cosulta</NavLink>
            </li>
            <li 
            className={` flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
                items-center hover:text-black transition-all ${(selected ==='contract' ? 'bg-[#0077ed] text-black' :'')}`}>
                <TbContract 
                className='w-[30px] h-[30px]' 
                />
                <NavLink 
                  onClick={()=>setSelected('contract')}
                  to="/contratos"
                  className="text-[15px]"> Contrato</NavLink>
            </li>
            <li className={`flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all ${(selected ==='admin' ? 'bg-[#0077ed] text-black' :'')} `}>
                <TbDatabaseCog 
                className='w-[30px] h-[30px]' 
                />
                <NavLink
                onClick={()=>setSelected('admin')}
                  to="/administracion"
                  className="text-[15px]"> Administracion</NavLink>
            </li>
            <li className={`flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all ${(selected ==='otro' ? 'bg-[#0077ed] text-black' :'')} `}>
                <TbDatabaseCog 
                className='w-[30px] h-[30px]' 
                />
                <NavLink
                onClick={()=>setSelected('otro')}
                  to="contratos/signed/1"
                  className="text-[15px]"> otro</NavLink>
            </li>
          </ul>
      <Outlet />
      </nav>
    </div>
  )
}


