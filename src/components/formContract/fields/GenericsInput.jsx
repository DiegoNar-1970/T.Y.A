export default function GenericsInput({ register, errors,placeholder1,type1,value1,label1,value2,label2,placeholder2,type2, asNumeric = false }) {
    return (
      <div className="flex gap-5">
        <div className='flex flex-col gap-1 flex-grow'>
          <label htmlFor={label1} className="">
            {label1}
          </label>
          <input
          type={type1}
            id={value1}
            {...register(
              value1,{ 
                required: `El valor de ${label1} es obligatorio`,
                
               }
            )}
            placeholder={placeholder1}
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors[value1] ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
          />
          {errors[value1] && <p className="text-red-500 text-xs mt-1 pl-2">{errors[value1].message}</p>}
        </div>
        
        <div className='flex flex-col gap-1 flex-grow'>
          <label htmlFor={label2} className="">
            {label2}
          </label>
          <input
            type={type2}
            id={value2}
            {...register(
              value2, { 
                required: `El valor de ${label2} es obligatorio`,
                valueAsNumber: asNumeric,
               }
            )}
            placeholder={placeholder2}
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors[value2] ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
          />
          {errors[value2] && <p className="text-red-500 text-xs pl-2">{errors[value2]?.message}</p>}
        </div>  
      </div>
    );
  }