import React from "react";
import CTA from "../CTA/cta";
import HeaderSocial from "../Headersocial/headersocial";
import "../header/header.css"
 

export const Header = () => {
  return (
  <header>
  <div className='container header__container'>
  <h5>Hello I'm</h5>
  <h1>Tambong kersten</h1>
  <h5 className='text-light'>Software Engineer </h5>
  <CTA/>
  <HeaderSocial/>
  <div className='my_image'>
  <img src="" alt='my image'/>
  </div>
  <a href='#contact' className='scroll__down'>Scroll down</a>
  </div>
  </header>
  )
  }
  export default Header;