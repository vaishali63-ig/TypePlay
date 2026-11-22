import './App.css'
import { Route, Routes } from 'react-router'
import JumpGame from './pages/JumpGame'
import Home from './pages/Home'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/play' element={<JumpGame/>}/>
      </Routes>
    </div>
  )
}

export default App
