
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { VStack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

function App() {
  

  return (
    

      <VStack bg={'#00a8b0'}>
        <Navbar />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />

          </Routes>
      </VStack>
    
  )
}

export default App
