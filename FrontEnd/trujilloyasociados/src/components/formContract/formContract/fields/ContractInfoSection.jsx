export default function ContractInfoSection({ register, errors }) {
    return (
      <div>  
        <h1 className='font-bold text-[24px]'>Informacion del contrato</h1>
        <span className='text-[14px] color-l-s'>Complete todos los campos para crear su contraco</span>
        
        <div className="mt-[20px] flex flex-col gap-1">
          <label htmlFor="num_contract" className="">
            Número de contrato
          </label>
          <input
            {...register(
              'num_contract', 
              { required: 'El número de contrato es obligatorio' }
            )}
            placeholder="Ingrese el numero de su contrato"
            className={`outline-[1px] rounded-[20px] p-1 text-[13px] hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] transition-all duration-300 ease-in-out ${errors.num_contract ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`}
          />
          {errors.num_contract && <p className="text-red-500 text-xs mt-1 pl-2">{errors.num_contract.message}</p>}
        </div>
      </div>
    );
  } 