import React from 'react'

export const Warning = ({parrafo}) => {
  return (
    <div className="flex items-start gap-3 rounded-[20px] bg-yellow-50 px-6 py-4 text-sm text-yellow-800">
    <svg
      className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.6A1.75 1.75 0 0 1 16.518 17H3.482a1.75 1.75 0 0 1-1.743-2.301l6.518-11.6zM11 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-1-2a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v3.5c0 .414.336.75.75.75z"
        clipRule="evenodd"
      />
    </svg>

    <div>
      <p className="font-semibold leading-snug text-yellow-800">
        Atención 
      </p>
      <p className="mt-1 text-yellow-800">
        {parrafo}
      </p>
    </div>
  </div>
  )
}
