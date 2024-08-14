import React from 'react'
import '../css/HeroPage.css'
import img1 from '../assets/images/img1.jpg'
import img_tabs from '../assets/images/img-tabs.jpg'
import img_mobile from '../assets/images/img-mobile.jpg'

function HeroPage() {
  let imgSrc = img1;
  
  if (window.innerWidth <= 885) {
    imgSrc = img_tabs;
  } else if (window.innerWidth <= 420) {
    imgSrc = img_mobile;
  }

  return (
    <div className='heropage-container'>
      <div className="heropage-wrapper">
        <img className='slide' src={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default HeroPage