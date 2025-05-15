import { lazy, Suspense } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { TbCaretLeftFilled, TbCaretRightFilled, TbHome, TbLogout2 } from 'react-icons/tb'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import consultaImg from './assets/consulta.png'
import ErrorBoundary from './components/ErrorBunary/ErrorBoundary .jsx'
import { Skeleton } from './components/loaders/Skeleton'
import { SideBar } from './layout/sideBar/SideBar'

const Consult = lazy(() => import('./pages/consult/Consult.jsx'))
const Contract = lazy(() => import('./pages/contract/Contract.jsx'))
const Administration = lazy(() => import('./pages/admin/Administration.jsx'))
const FormContract = lazy(() => import('./components/formContract/FormContract.jsx'))
const SignaturePage = lazy(() => import('./pages/firmaDigital/SignaturePage.jsx'))
const DashBoardPage = lazy(() => import('./pages/dashboard/DashBoardPage.jsx'))


function App() {
  const navigate = useNavigate();
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
            <div>
            <div className='p-2 rounded-[10px] bg-white flex flex-2/12 '>
              <IoSearchOutline className='text-[25px]' />
                <input type="text" name="" id="" />
            </div>
            </div>
            <div className='flex justify-end gap-3 items-center'>
              <TbLogout2 className='text-[25px]' />
                <img 
                  className='rounded-full w-[40px]'
                  src={consultaImg} 
                  alt="Usuario De consulta" />
                {/* <TbLogout /> */}
            </div>
            
          </section>

          

  
          <Routes>
              <Route path='/' element={<Consult/>}></Route>
              <Route path='/Consulta' element={<Consult/>} ></Route>
              <Route path='/Contratos' element={<Contract/>}></Route>
              <Route path='/Administracion' element={<Administration/>}></Route>
              <Route path='contratos/formularioContrato' element={<FormContract/>}></ Route>
              <Route path='contratos/signed/:id' element={<SignaturePage/>}></Route> 
              <Route path='dashboard' element={<DashBoardPage />}></Route> 
              <Route path='/*'></Route>
          </Routes>


        </main>
        <footer 
        className=' [grid-area:footer] rounded-[18px] p-3' 
        >footer</footer>
      </div>
        </Suspense>
        </ErrorBoundary>
    </  >
  )
}

export default App
