export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <img src="/logo.png" alt="Reduxir Logo" className="h-10" />
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#booking">Consultation</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  )
}
