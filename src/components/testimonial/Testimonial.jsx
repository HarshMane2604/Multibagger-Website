import React from 'react'
import TestimonialCarousel from '../carousel/Carousel'
function Testimonial() {
  return (
    <>
        <div>
            <h1 className='text-5xl font-bold text-center mt-10'>Testimonials</h1>
            <p className='text-center text-[#F25116] text-2xl font-medium mt-2'>What our clients have to say about us</p>
        </div>
        <TestimonialCarousel />
    </>
  )
}

export default Testimonial