import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-primary text-white">
      <div className="font-bold text-xl">Reduxir</div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Inicio</a>
        <a href="#" className="hover:underline">Servicios</a>
        <a href="#" className="hover:underline">Nosotros</a>
        <a href="#" className="hover:underline">Contacto</a>
      </div>
    </nav>
  )
}
