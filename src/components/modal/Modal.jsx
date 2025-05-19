import React from 'react'
import { DownloadPdf } from '../formContract/fields/DownloadPdf'

export const Modal = () => {
  return (
    <div className='fixed h-full w-full bg-[#fbfbfb72] z-10 left-0 top-0 flex justify-center items-center text-white' >
        <DownloadPdf />
    </div>  
  )
}
