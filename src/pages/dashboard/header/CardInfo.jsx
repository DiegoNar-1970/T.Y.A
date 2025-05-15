import React from 'react'

export const CardInfo = ({total,totalPorHours,Icon,title}) => {
  return (
    <section className='flex gap-2 flex-col rounded-[20px] p-3 fondo-blanco border-gray-300 shadow-md border flex-1 '>
        <div className='flex gap-2 items-center justify-between '>
            <h3 className='text-[15px] font-medium color-l-s'>{title}</h3>
            <Icon  className='text-[22px] text-apple'/>
        </div>
        <h1 className='font-bold text-[25px]'>{total}</h1>
        <p 
        className='font-extralight text-[13px] color-l-s' >
          + {totalPorHours} en las ultimas 5 horas
        </p>
    </section>
  ) 
}
