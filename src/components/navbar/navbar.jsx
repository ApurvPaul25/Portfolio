import React from 'react'
import './navbar.css'
import HomeMe from '../homeMe/homeme'


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="p-2 pl-8 pr-8 text-amber-300 rounded-2xl logo border-amber-500" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        KYDEN
      </div>
      <ul className="nav-links">
        <li><a href="#page-1">Home</a></li>
        <li><a href="#page-2">Journey</a></li>
        <li><a href="#page-3">Explorations</a></li>
        <li><a href="#page-4">Ideaframe</a></li>
        <li><a href="#page-5">Connect</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
