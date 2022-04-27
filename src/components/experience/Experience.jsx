import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id="experience">
      <h5> Experience </h5>
      <h2> My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Frontend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Frontend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Frontend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Frontend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Frontend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend"> 
          <h3>Backend Developer</h3>
          <div className="experience__content-2"> 
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Backend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Backend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Backend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Backend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
              <h4> Backend Developer </h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience