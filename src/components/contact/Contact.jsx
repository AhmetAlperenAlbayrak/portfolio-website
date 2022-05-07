import React ,{ useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
    const form = useRef(null)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_g6tnmm7', 'template_2ppm15y', form.current, 'SNeyoWBvZHP9Jf5lc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ahmetalperenalbayrak@gmail.com</h5>
            <a href="mailto:ahmetalperenalbayrak@gmail.com" target="_blank" rel="noopener noreferrer">Send Me an Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+905529295797" target="_blank" rel="noopener noreferrer">Send Me a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Send</button>
          </form>

      </div>
    </section>
  )
}

export default Contact