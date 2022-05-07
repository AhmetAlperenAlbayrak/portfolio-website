import React from 'react'
import './header.css'
import CTA from './CTA'
import ME  from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id="home"> 
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Ahmet Alperen Albayrak</h1>
        <h5 className='text-light' >I'm a Sales Development Representative</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header