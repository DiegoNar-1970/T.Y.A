import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {loginFunction,error,isAuth} = useAuth();
  const navigate=useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  useEffect(()=>{
    if(isAuth ) {
        navigate('/consulta')
    }
    return
  },[isAuth,navigate])

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    loginFunction(data)
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f6] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-2">Iniciar sesión</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Accede a tu cuenta para gestionar tus casos
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              placeholder="nombre@ejemplo.com"
              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-black`}
              {...register('email', {
                required: 'El correo electrónico es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Correo electrónico no válido'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">Contraseña</label>
            </div>
            <div className="relative">
              <input
                type="password"
                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-10`}
                {...register('password_hash', {
                  required: 'La contraseña es requerida',
                  minLength: {
                    value: 6,
                    message: 'La contraseña debe tener al menos 6 caracteres'
                  }
                })}
              />
              <FiEye className="absolute right-3 top-3.5 text-gray-400" />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Procesando...' : 'Iniciar sesión'}
            {!isSubmitting && <span className="text-lg">→</span>}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-gray-400">
          Al iniciar sesión, aceptas nuestros <a href="#" className="underline">Términos de servicio</a> y <a href="#" className="underline">Política de privacidad</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


// import { useAuth } from '../../context/AuthContext';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// const {loginFunction,user,isAuth} = useAuth(); 
// const navigate=useNavigate();
// useEffect(()=>{
//     if(isAuth){
//         navigate('')
//     }
// },[isAuth])