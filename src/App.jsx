import { lazy, Suspense } from 'react'
import { MdSaveAlt } from 'react-icons/md'
import { TbCaretLeftFilled, TbCaretRightFilled, TbHome, TbLogout2 } from 'react-icons/tb'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import adminImg from './assets/images/admin.png'
import EmployeeTable from './components/employee/EmployeeTable.jsx'
import ErrorBoundary from './components/ErrorBunary/ErrorBoundary .jsx'
import { Skeleton } from './components/loaders/Skeleton'
import { useAuth } from './context/AuthContext.jsx'
import { SideBar } from './layout/sideBar/SideBar'
import LoginForm from './pages/login/LoginForm.jsx'

const Consult = lazy(() => import('./pages/consult/Consult.jsx'))
const Contract = lazy(() => import('./pages/contract/Contract.jsx'))
const Administration = lazy(() => import('./pages/admin/Administration.jsx'))
const FormContract = lazy(() => import('./components/formContract/FormContract.jsx'))
const SignaturePage = lazy(() => import('./pages/firmaDigital/SignaturePage.jsx'))
const DashBoardPage = lazy(() => import('./pages/dashboard/DashBoardPage.jsx'))
const ProtectedRouter = lazy(() => import('./components/secure/ProtectedRouter.jsx'))
const CustomerLayout = lazy(() => import('./pages/customer/CustomerLayout.jsx'))

function App() {
  const {user,isAuth,isLoading,logoutFunction} = useAuth();
  const navigate = useNavigate();
  if (isLoading) return <Skeleton/>
  return (
    <>
    <ErrorBoundary fallback={<p>⚠️ Algo falló cargando el componente.</p>}>
    
      <Suspense fallback={<Skeleton />}> 
      <div id='app' className='app  h-screen p-2 gap-2 bg-[#f5f5f7]'>
        <aside className=' [grid-area:aside] hidden sm:hidden flex-col md:flex overflow-y-auto rounded-[18px]'>
            <SideBar/>
        </aside>
        <main className='[grid-area:main] sm:w-full rounded-[18px] p-2 overflow-y-auto'> 
          <section className='top-0 flex justify-between sticky'>
            <div className=' flex  gap-4 text-[30px]'>
              <TbHome onClick={()=>navigate('/consulta')} className='hover:text-[#0077ed] transition-all duration-300'/>
                <div className='flex'>  
                <TbCaretLeftFilled onClick={()=>navigate(-1)} className='hover:text-[#0077ed] transition-all duration-300'/>
                <TbCaretRightFilled onClick={()=>navigate(1)} className='hover:text-[#0077ed] transition-all duration-300'/>
              </div>
            </div>
              {isAuth ? 
                <div className='flex justify-end gap-3 items-center'>
                <TbLogout2 onClick={logoutFunction} 
                className='text-[25px] cursor-pointer hover:scale-x-110' />
                  <img 
                    className='rounded-full w-[40px]'
                    src={adminImg} 
                    alt="Usuario De consulta" />
                  {/* <TbLogout /> */}
              </div>
              :
              <Link to="/login"  className="flex gap-3 outline-[1px] outline-gray-500 rounded-[20px] p-2 items-center cursor-pointer hover:scale-105 transition-all
              duration-300 ease-in-out w-[120px] bg-apple text-white hover:bg-[#0071e3bb]" >
                <MdSaveAlt className="text-[22px]" />
                <button 
                className="cursor-pointer text-[14px]"
                >Login</button>
      
              </Link>
                }
            
          </section>

          

  
          <Routes>
              <Route path='/' element={<Consult/>}></Route>
                <Route path='/Consulta' element={<Consult/>} ></Route>
                <Route path='/login' element={<LoginForm />}></Route> 
                <Route path='contratos/signed/:id' element={<SignaturePage/>}></Route> 

                <Route element={<ProtectedRouter />}>
                  <Route path='/Contratos' element={<Contract/>}></Route>
                  <Route path='/Administracion' element={<Administration/>}></Route>
                  <Route path='contratos/formularioContrato' element={<FormContract/>}></ Route>
                  <Route path='dashboard' element={<DashBoardPage />}></Route> 
                  <Route path='/tabla-empleado' element={<EmployeeTable />}></Route> 
                  <Route path='/clientes' element={<CustomerLayout />}></Route> 
                </Route>
                <Route path='/*'></Route>
          </Routes>


        </main>
        <footer 
        className=' [grid-area:footer] rounded-[18px] p-3 flex justify-center text-color-l-s color-text ' 
        ><span>© 2025 Trujillo y Asociados Law Group. Todos los derechos reservados.</span></footer>
      </div>
        </Suspense>
        </ErrorBoundary>
    </>
  )
}

export default App
