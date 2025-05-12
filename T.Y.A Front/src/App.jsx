import { TbCaretLeftFilled, TbCaretRightFilled, TbHome, TbLogout2 } from 'react-icons/tb'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import consultaImg from './assets/consulta.png'
import { FormContract } from './components/formContract/FormContract.jsx'
import { SideBar } from './layout/sideBar/SideBar'
import { Administration } from './pages/admin/Administration.jsx'
import { Consult } from './pages/consult/Consult.jsx'
import { Contract } from './pages/contract/Contract.jsx'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div id='app' className='app  h-screen p-2 gap-2 bg-[#f5f5f7]'>
        <aside className=' [grid-area:aside] hidden sm:hidden flex-col md:flex overflow-y-auto rounded-[18px]'>
            <SideBar/>
        </aside>
        <main className='[grid-area:main] sm:w-full rounded-[18px] p-2 overflow-y-auto'> 
          <section className='mb-[20px] flex justify-between'>
            <div className=' flex  gap-4 text-[30px]'>
              <TbHome onClick={()=>navigate('/consulta')} className='hover:text-[#0077ed] transition-all duration-300'/>
              <div className='flex'>  
                <TbCaretLeftFilled onClick={()=>navigate(-1)} className='hover:text-[#0077ed] transition-all duration-300'/>
                <TbCaretRightFilled onClick={()=>navigate(1)} className='hover:text-[#0077ed] transition-all duration-300'/>
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
              <Route path='contratos/formularioContrato' element={<FormContract/>}></Route>
              <Route path='/*'></Route>
          </Routes>
        </main>
        <footer 
        className=' [grid-area:footer] rounded-[18px] p-3' 
        >footer</footer>
      </div>
    </>
  )
}

export default App
