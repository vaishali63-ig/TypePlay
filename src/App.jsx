import './App.css'
import { Route, Routes } from 'react-router'
import JumpGame from './pages/JumpGame'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<>home</>}/>
        <Route path='/play' element={<JumpGame/>}/>
      </Routes>
    </div>
  )
}

export default App
