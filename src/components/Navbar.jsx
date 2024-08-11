import React from 'react'
import '../css/Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
      <nav className="nav-wrapper">
        <ul className='nav-links nav-links-left'>
          <li><button>Home</button></li>
          <li><button>About</button></li>
          <li><button>Services</button></li>
          <li><button>Gallery</button></li>
          <li><button>Contact</button></li>
        </ul>
        
        <ul  className='nav-links nav-links-right'>
          <li><button>For Business</button></li>
          <li><button>Post Ads</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar