import React from 'react'

export const ErrorAlertGeneric = ({ title, errors }) => {
  return (
    <div className="flex items-start gap-3 rounded-md bg-red-50 px-6 py-4 text-sm text-red-700">
    {/* Ícono de error */}
    <svg
      className="mt-1 h-5 w-5 flex-shrink-0 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        clipRule="evenodd"
      />
    </svg>

    {/* Contenido */}
    <div>
      <p className="font-semibold leading-snug text-red-700 text-[15px]">{title}</p>
      <ul className="mt-1 list-disc list-inside space-y-1 text-red-700 text-[13px]">
          <li>{errors}</li>
      </ul>
    </div>
  </div>
  )
}
