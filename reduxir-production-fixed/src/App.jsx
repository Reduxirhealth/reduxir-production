import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenido a Reduxir</h1>
      <p className="text-gray-700 mt-2">Transforma tu salud con un plan personalizado.</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Suscríbete ahora
      </button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <nav className="bg-gray-100 p-4 flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
