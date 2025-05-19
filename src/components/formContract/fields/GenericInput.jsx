export const GenericInput = ({ register, errors,placeholder,type,value,label, asNumeric = false }) => {
    return (
      <div className="flex gap-5 grow">
        <div className='flex flex-col gap-1 grow'>
          <label htmlFor={label} className="">
            {label}
          </label>
          <input
          type={type}
            id={value}
            {...register(
              value,{ 
                required: `El valor de ${label} es obligatorio`,
                valueAsNumber:asNumeric
                
               }
            )}
            placeholder={placeholder}
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors[value] ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
          />
          {errors[value] && <p className="text-red-500 text-xs mt-1 pl-2">{errors[value].message}</p>}
        </div> 
      </div>
    );
  }