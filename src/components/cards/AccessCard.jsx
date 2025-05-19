// components/AccessCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AccessCard({ option }) {
  return (
    <motion.div
      whileHover={{ 
        y: -4,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
      className={`${option.color} rounded-lg p-6 cursor-pointer transition-all duration-200 relative overflow-hidden border border-gray-100`}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          {option.icon}
        </div>
        <div className="flex-1">
          <motion.h2 
            className="text-xl font-semibold text-gray-800 mb-1"
            layout
          >
            {option.title}
          </motion.h2>
          <p className="text-gray-600 text-sm mb-3">{option.description}</p>
          
          {/* Enlace "Acceder" que solo aparece en hover */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            <Link to={option.navigate || "#"}>
              <motion.span
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                whileHover={{ x: 2 }}
              >
                Acceder <span className="ml-1">→</span>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};