import HomePage from './pages/HomePage.jsx'
import PokemonPage from './pages/PokemonPage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/pokemon/:name" element={<PokemonPage />} />
    </Routes>
  )
}

export default App
