import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CartaVinhos from './cartavinhos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartavinhos" element={<CartaVinhos />} />
    </Routes>
  )
}

export default App