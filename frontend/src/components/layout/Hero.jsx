import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import two from "../../assets/two.jpg" // replace with your car image

const Hero = () => {
  return (
    <section className='relative min-h-[60vh] md:min-h-screen flex items-center justify-center'>
      
      {/* Background Image */}
      <img 
        src={two} 
        alt="Luxury car parked in a modern city environment" 
        className='absolute inset-0 w-full h-full object-cover brightness-[.8]' 
      />
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-opacity-50 flex items-center justify-center'>
        
        {/* Hero Text */}
        <div className='text-center text-white p-6 sm:p-10 max-w-4xl'>
          <h1 className='text-4xl sm:text-7xl md:text-[6rem] font-extrabold tracking-tighter uppercase mb-4 leading-none drop-shadow-lg'>
            FIND YOUR
            <br />
            DREAM CAR
          </h1>

          <p className='text-md sm:text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto'>
            Explore the latest collection of luxury, sport, and family vehicles. 
            Drive your passion — style meets performance at unbeatable prices.
          </p>

          <Link 
            to="/collections/all"
            className='inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full 
                       text-base font-semibold uppercase tracking-wider transition duration-300
                       hover:bg-gray-200 hover:shadow-lg'
          >
            Explore Now
            <FaArrowRight className='ml-3 w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
