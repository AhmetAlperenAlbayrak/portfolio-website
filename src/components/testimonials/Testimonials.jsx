import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="client avatar" />
          </div>
            <h5 className='client__name' >Ernest Achiever</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nesciunt nam! Rerum consequuntur officia autem, itaque ad illum quasi accusamus sed dicta alias? Autem rem quasi eum velit? Ea, aspernatur.</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="client avatar" />
            </div>
            <h5 className='client__name' >Ernest Achiever</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam doloribus consectetur atque a accusantium in harum hic perspiciatis nesciunt. Excepturi, nisi ea eos architecto iure tempore repudiandae reprehenderit necessitatibus.</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="client avatar" />
            </div>
            <h5 className='client__name' >Ernest Achiever</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis omnis consectetur doloremque perferendis eveniet quibusdam earum minima quisquam iste voluptatem quos eligendi accusantium dolore quod aliquid dolores sequi incidunt.</small>
            
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials