import React from 'react';
import { FaCalendarAlt, FaFileAlt, FaMoneyBillWave, FaProjectDiagram, FaUsers, FaUserTie } from "react-icons/fa";
import AccessCard from '../../components/cards/AccessCard';



 const Administration = () => {
  const options = [
    {
      id: 1,
      title: "Contratos",
      description: "Gestiona los contratos",
      icon: <FaFileAlt className="text-blue-500" size={24} />,
      color: "bg-white hover:bg-blue-100",
      navigate:''
    },
    {
      id: 2,
      title: "Empleados",
      description: "Administra la información de tu equipo",
      icon: <FaUserTie className="text-green-500" size={24} />,
      color: "bg-white   hover:bg-green-100",
      navigate:'/tabla-empleado'
    },
    {
      id: 3,
      title: "Clientes",
      description: "Gestiona tu cartera de clientes",
      icon: <FaUsers className="text-purple-500" size={24} />,
      color: "bg-white hover:bg-purple-100",
      navigate:'',
    },
    {
      id: 4,
      title: "Procesos",
      description: "Supervisa y optimiza tus flujos de trabajo",
      icon: <FaProjectDiagram className="text-orange-500" size={24} />,
      color: "bg-white hover:bg-orange-100",
      navigate:''
    },
    {
      id: 5,
      title: "Plan de Trabajo",
      description: "Organiza y planifica tus actividades",
      icon: <FaCalendarAlt className="text-red-500" size={24} />,
      color: "bg-white hover:bg-red-100",
      navigate:''
    },
    {
      id: 6,
      title: "Facturación",
      description: "Gestiona pagos y facturación",
      icon: <FaMoneyBillWave   className="text-teal-500" size={24} />,
      color: "bg-white hover:bg-teal-100",
      navigate:''
      
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Panel Principal</h1>
      <p className="text-gray-600 mb-8">Selecciona una opción para continuar</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {options.map((option) => (
          <AccessCard key={option.id} option={option} />
        ))}
      </div>
    </div>
  </div>
  )
}
export default Administration;