
import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { TbClipboardSearch, TbContract, TbDatabaseCog } from "react-icons/tb";
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import { Skeleton } from '../../components/loaders/Skeleton';
import { useAuth } from '../../context/AuthContext';
import './sideBar.css';

export const SideBar = () => {
  const {user,isAuth,isLoading,logoutFunction} = useAuth();

  const location = useLocation();
  const path = location.pathname
  const initialState = path.split('/')[1] || 'consulta'
  const [selected,setSelected]=useState(initialState);
  if (isLoading) return <Skeleton />

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
          <NavLink 
              to="/consulta"
              onClick={() => setSelected('consulta')}
              className={`flex gap-2 hover:bg-[#0077ed] p-2 rounded-[12px]
                items-center hover:text-black transition-all ${selected === 'consulta' ? 'bg-[#0077ed] text-black' : ''}`}>
              <TbClipboardSearch className='w-[30px] h-[30px]' />
              <span className="text-[15px]">Consulta</span>
            </NavLink>
            
          {user?.roles?.includes('admin') || user?.roles?.includes('employee') ?(
                        <NavLink 
                        to="/contratos"
                        onClick={()=>setSelected('contratos')}
                        className={` flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
                          items-center hover:text-black transition-all ${(selected ==='contratos' ? 'bg-[#0077ed] text-black' :'')}`}>
                          <TbContract 
                          className='w-[30px] h-[30px]' 
                          />
                          <span
                            className="text-[15px]"> Contrato</span>
                      </NavLink>
          ):''}
          {user?.roles?.includes('admin') && (
            <>
              <NavLink
            to="/dashboard" 
            onClick={()=>setSelected('dashboard')}
            className={`flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all ${(selected ==='dashboard' ? 'bg-[#0077ed] text-black' :'')} `}>
                <MdOutlineDashboard 
                className='w-[30px] h-[30px]' 
                />
                <span
                  className="text-[15px]"> Dashboard</span>
            </NavLink>
            <NavLink
              to="/administracion"
              onClick={()=>setSelected('administracion')}
              className={`flex gap-2  hover:bg-[#0077ed] p-2 rounded-[12px]
             items-center hover:text-black transition-all ${(selected ==='administracion' ? 'bg-[#0077ed] text-black' :'')} `}>
                <TbDatabaseCog 
                className='w-[30px] h-[30px]' 
                />
                <span
                  
                  className="text-[15px]"> Administracion</span>
            </NavLink>
            </>
          )
}
            
          </ul>
      <Outlet />
      </nav>
    </div>
  )
}


