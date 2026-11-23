import './App.css'
import { Route, Routes } from 'react-router'
import JumpGame from './pages/JumpGame'
import Home from './pages/Home'
import About from './pages/About'
import PlayGuide from './pages/PlayGuide'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/play' element={<JumpGame/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/play-guide' element={<PlayGuide/>} />
      </Routes>
    </div>
  )
}

export default App
