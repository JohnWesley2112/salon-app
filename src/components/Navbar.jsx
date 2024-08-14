import React from 'react'
import '../css/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="navbar-wrapper">
        <ul className="nav-links nav-links-left">
          <li className="links">Home</li>
          <li className="links">About</li>
          <li className="links">Services</li>
          <li className="links">Gallery</li>
          <li className="links">Contact</li>
        </ul>
        <ul className="nav-links nav-links-right">
          <li className="links">For Business</li>
          <li className="links">Post Ads</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar