import React from 'react'
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        
        <a href="https://www.linkedin.com/in/ahmetalperenalbayrak/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AhmetAlperenAlbayrak" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href='mailto:ahmet.alperen@bazaarvoice.com' target="_blank" rel="noopener noreferrer"><BsFillEnvelopeFill/></a>
    </div>
  )
}

export default HeaderSocials