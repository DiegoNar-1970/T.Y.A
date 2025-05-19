import React from 'react';

export const GenericOption = ({ 
  label, 
  name, 
  options = [], 
  register, 
  errors 
}) => {
  const selectRegister = register(name, {
    required: 'Este campo es obligatorio'
  });

  const error = errors?.[name];

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        {...selectRegister}
        className={`outline-[1px] rounded-[20px] p-[5px] text-[13px] 
          hover:outline-[#0d86ffbb] hover:placeholder:text-[#0d86ffbb] 
          transition-all duration-300 ease-in-out 
          ${error ? 'border-red-500 placeholder:text-red-500' : 'border-gray-300'}`}
      >
        <option value="" disabled>{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs pl-2">
          {error.message}
        </p>
      )}
    </div>
  );
};

