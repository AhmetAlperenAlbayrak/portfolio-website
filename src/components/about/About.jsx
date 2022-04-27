import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Full Stack Web Developer</h5>
              <small> I am a full stack web developer with a passion for creating </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Full Stack Web Developer</h5>
              <small> I am a full stack web developer with a passion for creating </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Full Stack Web Developer</h5>
              <small> I am a full stack web developer with a passion for creating </small>
            </article>

            

          </div>
          <p> I am a full stack web developer with a passion for creating. I have a background in the field of  </p>

            <a href='#contact' className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About