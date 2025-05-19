import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Skeleton } from '../loaders/Skeleton';

 const ProtectedRouter = () => {
  const {user,isAuth,isLoading} = useAuth();


  if(isLoading) return <Skeleton />
  if(!isLoading && !isAuth){
    return <Navigate to='/consulta' replace> </Navigate>
  }

  return (
    <Outlet/> 
  )
}
export default ProtectedRouter;