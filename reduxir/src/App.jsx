
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CalendarBooking from './components/CalendarBooking';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CalendarBooking />
      <Footer />
    </div>
  );
}

export default App;
