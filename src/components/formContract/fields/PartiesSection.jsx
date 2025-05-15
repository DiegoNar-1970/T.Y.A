import { TbCirclePlus, TbTrash } from 'react-icons/tb';

export default function PartiesSection({ type, fields, register, errors, remove, agregar }) {
  const isDemandante = type === 'demandantes';
  const label = isDemandante ? 'Demandante' : 'Demandado';
  
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col gap-2'>
        {fields.map((field, index) => (
          <div key={field.id} className='flex gap-4 mb-2 justify-around'>
            <div className='relative flex flex-col gap-1'>
              <label htmlFor={`${type}-${index}-name`}>{label}</label>
              <input 
                {...register(`${type}.${index}.name`, {
                  required: 'El nombre es obligatorio'
                })}
                placeholder={`nombre del ${label.toLowerCase()}`}
                className={`w-full outline-[1px] rounded-[20px] p-1 text-[13px] 
                  hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] 
                  transition-all duration-300 ease-in-out 
                  ${errors[type]?.[index]?.name ? 'border-red-500 placeholder:text-red-500' : 'border-back'}`}
              />
              {errors[type]?.[index]?.name && (
                <p className='text-red-500 text-xs'>
                  {errors[type][index].name.message}
                </p>
              )}
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor={`${type}-${index}-type_of_doc`}>Tipo de Documento</label>
              <select
                {...register(`${type}.${index}.type_of_doc`, {
                  required: 'Seleccione un tipo de documento'
                })}
                className={`outline-[1px] rounded-[20px] p-[5px] text-[13px] 
                  hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] 
                  transition-all duration-300 ease-in-out 
                  ${errors[type]?.[index]?.type_of_doc ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="cedula">Cédula</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="extranjera">CC Extranjera</option>
              </select>
              {errors[type]?.[index]?.type_of_doc && (
                <p className="text-red-500 text-xs pl-2">
                  {errors[type][index].type_of_doc.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-[-10px]">
              <label htmlFor={`${type}-${index}-document`}>Documento</label>
              <input
                {...register(`${type}.${index}.document`, {
                  required: 'La identificación es obligatoria'
                })}
                placeholder="Número de identificación"
                className={`outline-[1px] rounded-[20px] p-1 text-[13px] 
                  hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] 
                  transition-all duration-300 ease-in-out 
                  ${errors[type]?.[index]?.document ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`}
              />
              {errors[type]?.[index]?.document && (
                <p className="text-red-500 text-xs mt-1 pl-2">
                  {errors[type][index].document.message}
                </p>
              )}
            </div>

            {fields.length > 1 && (
              <div className='self-end   '>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 
                  rounded-full transition-colors mt-1"
                  aria-label={`Eliminar ${label.toLowerCase()} ${index + 1}`}
                >
                  <TbTrash size={20} className='self-end' />
                </button>
              </div>
            )}
          </div>
        ))}

        <div className='flex items-center justify-center w-[200px] gap-2 color-resaltado hover:text-[#0d86ffbb] outline-[1px] rounded-[20px]'>
          <TbCirclePlus className='grow-0 text-[20px]' />
          <button
            className='grow-0 text-[15px]'
            type='button'
            onClick={agregar}
          >
            Agregar {label}
          </button>
        </div>
      </div>
    </div>
  );
}