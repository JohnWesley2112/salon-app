import React from 'react'
import { ReactComponent as Search} from '../assets/svg/search.svg'

function Header() {
  return (
    <div className='nav-container'>
      <nav>
        <img src={require('../assets/logo.jpg')} alt="" srcset="" />
        <div className="search-wrapper">
          <input type="text" name="" id="" />
          <button><Search/></button>
        </div>
      </nav>
    </div>
  )
}

export default Header