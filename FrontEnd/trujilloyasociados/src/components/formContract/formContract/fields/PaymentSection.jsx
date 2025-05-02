export default function PaymentSection({ register, errors }) {
    return (
      <div className="flex gap-5">
        <div className='flex flex-col gap-1 flex-grow'>
          <label htmlFor="paiment" className="">
            Monto
          </label>
          <input
            id="paiment"
            {...register(
              'paiment', 
              { required: 'El valor del pago es obligatorio' }
            )}
            placeholder="Ingrese el valor del Pago"
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.paiment ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
          />
          {errors.paiment && <p className="text-red-500 text-xs mt-1 pl-2">{errors.paiment.message}</p>}
        </div>
        
        <div className='flex flex-col gap-1 flex-grow'>
          <label htmlFor="porcentage_honorario" className="">
            Porcentaje
          </label>
          <input
            type='number'
            id="porcentage_honorario"
            {...register(
              'porcentage_honorario', 
              { required: 'El valor del porcentaje es obligatorio' }
            )}
            placeholder="0%"
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.porcentage_honorario ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
          />
          {errors.porcentage_honorario && <p className="text-red-500 text-xs pl-2">{errors.porcentage_honorario.message}</p>}
        </div>  
      </div>
    );
  }