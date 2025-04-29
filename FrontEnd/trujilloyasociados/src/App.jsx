import './App.css'

function App() {
  return (
    <>
      <div id='app' className=' relative h-screen p-2 gap-2'>
        <aside className='bg-stone-500 [grid-area:aside] flex-col flex overflow-y-auto'>
            aside
        </aside>
        <main className='[grid-area:main] bg-blue-300'> main
        </main>
        <footer className='bg-red-400 [grid-area:footer] ' >footer</footer>
      </div>
    </>
  )
}

export default App
