import React, { useState } from 'react'
import '../css/Navbar.css';
import { ReactComponent as HamBurgerIcon } from '../assets/svg/hamburger-icon.svg'

function Navbar() {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <div className='navbar-container'>
      <div className="navbar-wrapper">
        <button onClick={()=>{setIsClicked(!isClicked)}} className='hamburger-icon-btn'  ><HamBurgerIcon /></button>
        <ul className={`${isClicked?'nav-links nav-links-left show-left-nav-links':'nav-links nav-links-left'}`}>
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