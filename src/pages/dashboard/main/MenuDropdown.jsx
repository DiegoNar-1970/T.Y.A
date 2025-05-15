import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';

export const MenuDropdown = ({data}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-gray-100 transition"
      >
        <SlOptionsVertical className="w-5 h-5 text-gray-700" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10, x:- 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50"
          >
            <div className="py-1 text-sm text-gray-700">
              <button 
              onClick={() => window.location.href = data.path}
              
              className="w-full px-4 py-2 text-left hover:bg-gray-100">Ver</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600">Eliminar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

