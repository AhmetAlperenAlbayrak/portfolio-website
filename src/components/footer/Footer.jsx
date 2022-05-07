import React from 'react'
import './footer.css'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Ahmet Alperen Albayrak</a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href='https://twitter.com'><IoLogoTwitter /></a>
        <a href='https://linkedin.com'><IoLogoLinkedin /></a>
        <a href='https://github.com'><IoLogoGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2020 Ahmet Alperen Albayrak</small>
      </div>
    </footer>
  )
}

export default Footer