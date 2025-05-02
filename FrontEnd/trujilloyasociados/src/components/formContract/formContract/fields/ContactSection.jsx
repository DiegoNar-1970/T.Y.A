export default function ContactSection({ register, errors }) {
    return (
      <>
        <div className="flex gap-5">
          <div className='flex flex-col gap-1 flex-grow'>
            <label htmlFor="email" className="">
              Correo electronico
            </label>
            <input
              id="email"
              {...register(
                'email', 
                { 
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Dirección de correo inválida"
                  }
                }
              )}
              placeholder="ejemplo@example.com"
              className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.email ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 pl-2">{errors.email.message}</p>}
          </div>
          
          <div className='flex flex-col gap-1 flex-grow'>
            <label htmlFor="type_of_pai" className="">
              Pago Final
            </label>
            <select
              id="type_of_pai"
              {...register(
                'type_of_pai', 
                { required: 'selecciona una opción' }
              )}
              className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.type_of_pai ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
            >
              <option value="" disabled>Seleccione una opcion</option>
              <option value="contado">Contado</option>
              <option value="cuotas">Cuotas</option>
              <option value="acuerdo">Según Acuerdo</option>
            </select>
            {errors.type_of_pai && <p className="text-red-500 text-xs pl-2">{errors.type_of_pai.message}</p>}
          </div>  
        </div>
        
        <div className="flex gap-5">
          <div className='flex flex-col gap-1 flex-grow'>
            <label htmlFor="executive" className="">
              Ejecutivo
            </label>
            <input
              id="executive"
              {...register(
                'executive', 
                { required: 'Ingrese el nombre del ejecutivo' }
              )}
              placeholder="Ingrese el ejecutivo que genero el contrato"
              className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.executive ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
            />
            {errors.executive && <p className="text-red-500 text-xs mt-1 pl-2">{errors.executive.message}</p>}
          </div>
          
          <div className='flex flex-col gap-1 flex-grow'>
            <label htmlFor="contract_type" className="">
              Selecciona el contrato
            </label>
            <select
              id="contract_type"
              {...register(
                'contract_type', 
                { required: 'selecciona una opción' }
              )}
              className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.contract_type ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`} 
            >
              <option value="" disabled>Seleccione un Contrato</option>
              <option value="subsanacion">Subsanación</option>
              <option value="servicios">Prestacion de Servicios</option>
              <option value="civil">Juzgado civil</option>
            </select>
            {errors.contract_type && <p className="text-red-500 text-xs pl-2">{errors.contract_type.message}</p>}
          </div> 
        </div>
        
        <div className='flex flex-col gap-1 flex-grow'>
          <label htmlFor="observation" className="">
            Observacion
          </label>
          <textarea
            id="observation"
            {...register('observation')}
            placeholder="Deja un comentario sobre este contrato"
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out`} 
          />
        </div>
      </>
    );
  }