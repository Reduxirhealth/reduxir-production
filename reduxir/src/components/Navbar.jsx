
import React from 'react';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <div className="text-xl font-bold text-green-700">Reduxir</div>
    <ul className="flex gap-4 text-gray-700">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#rewards">Rewards</a></li>
      <li><a href="#coachbot">Coachbot</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
