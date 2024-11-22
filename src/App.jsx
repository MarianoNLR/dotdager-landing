import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
