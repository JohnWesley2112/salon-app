import React from "react";
import '../css/Header.css'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ReactComponent as UserIcon } from '../assets/svg/profile.svg';


function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <img className="logo" src={require('../assets/logo.jpg')} alt="" />
          <div className="search-wrapper">
            <input type="text" name="" id="" placeholder="Search"/>
            <button><SearchIcon/></button>
          </div>
          <button className="vertical-dots"><UserIcon/></button>
        <div className="profile-wrapper">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Header;