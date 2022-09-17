import './App.css'
import NavBar from './components/misc/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>hola</h1>} />
      </Routes>
    </>
  )
}

export default App
