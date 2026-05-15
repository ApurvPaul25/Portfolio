import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="p-2 pl-8 pr-8 text-amber-300 rounded-2xl logo border-amber-500" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        My_Store
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
