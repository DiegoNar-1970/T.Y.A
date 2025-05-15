export default function InputArea({ register, errors,placeholder2,placeholder,value2,label2,type2,value,label}) {
    return (
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor={value} className="">
            {label}
          </label>
          <textarea
            id={value} 
            {...register(
              value, 
              { required: 'Este campo es obligatorio' }
            )}
            placeholder={placeholder}
            className={`outline-[1px] rounded-[20px] w-[170px] lw:flex md:w-[270px] pl-2 h-[27px] text-[3px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors[value] ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'} text-[13px]`}
          />
          {errors[value] && <p className="text-red-500 text-xs mt-1 pl-2">{errors[value]?.message}</p>}
      </div>
      <div className='flex flex-col gap-1 flex-grow'>
          <label htmlFor={label2} className="">
            {label2}
          </label>
          <input
          type={type2}
            id={value2}
            {...register(
              value2, 
              { required: `El valor de ${label2} es obligatorio` }
            )}
            placeholder={placeholder2}
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors[value2] ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
          />
          {errors[value2] && <p className="text-red-500 text-xs mt-1 pl-2">{errors[value2].message}</p>}
        </div>

      </div>
        
    );
  } 