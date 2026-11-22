import './App.css'
import { Route, Routes } from 'react-router'
import JumpGame from './pages/JumpGame'

function App() {

  return (
    <div className='text-green-500'>
      <Routes>
        <Route path='/' element={<>home</>}/>
        <Route path='/play' element={<JumpGame/>}/>
      </Routes>
    </div>
  )
}

export default App
