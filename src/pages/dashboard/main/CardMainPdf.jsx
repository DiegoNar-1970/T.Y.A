import React from 'react'
import { CiFileOn } from 'react-icons/ci'
import { MenuDropdown } from './MenuDropdown'

export const CardMainPdf = ({name,time,data}) => {
  return (
    <section className='flex justify-between p-4 bg-hover ease-in-out duration-300 transition-all rounded-[10px]'>
        <div className='flex gap-7'>
            <div className='bg-bg rounded-[10px] '>
                <CiFileOn className='text-blue-400 text-[50px]' />
            </div>
            <div className="flex  justify-center flex-col">
                <h4>{name}</h4>
                <p className='font-extralight text-[13px] color-l-s' >
                  Hace {time}
                </p>
            </div>
        </div>
        <MenuDropdown 
            data={data}
            className=""/>
    </section>
  )
}
