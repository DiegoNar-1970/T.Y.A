import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EmployeeModal = ({ employee, onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValues: {
      name: '',
      document: '',
      phone: ''
    }
  });

  useEffect(() => {
    if (employee) {
      setValue('name', employee.name || '');
      setValue('document', employee.document || '');
      setValue('phone', employee.phone || '');
    } else {
      reset();
    }
  }, [employee, reset, setValue]);

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <div className="fixed h-full w-full bg-[#fbfbfb72] z-10 left-0 top-0 flex justify-center items-center text-black">
      <div className="bg-white p-6 rounded-[20px] shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {employee ? 'Editar Empleado' : 'Nuevo Empleado'}
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'El nombre es requerido' })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Nombre completo"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-1">
              Documento
            </label>
            <input
              id="document"
              type="text"
              {...register('document', { 
                required: 'El documento es requerido',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo se permiten números'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                errors.document ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Número de documento"
            />
            {errors.document && (
              <p className="mt-1 text-sm text-red-600">{errors.document.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', { 
                required: 'El teléfono es requerido',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo se permiten números'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Número de teléfono"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {employee ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;