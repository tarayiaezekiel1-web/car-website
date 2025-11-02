import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import {FiPhoneCall} from "react-icons/fi"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t py-12'>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap6 px-4 lg:px-0'>
            <div>
                <h3 className='text-lg text-black mb-4 font-bold'>NewsLatter</h3>
                <p className='text-gray-500 mb-4 text-xs '>
                    be the first to hear about our products , exclusive events and online offers
                </p>
                <p className='text-black mb-6 font-medium text-sm '>
                    sign up and get 10% off your first order
                </p>
                {/**news letter form */}
                <form className='flex'>
                    <input type="email"
                    placeholder='enter your email' 
                    className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-lg-md focus:outline-none
                    focus:ring-2 focus:ring-gray-500 transitional-all '
                    required/>
                    <button className='bg-black text-white px-1 text-xs rounded-r-md hover:bg-gray-800 transition-all'>
                        Subscribe
                    </button>
                </form>
            </div>
            {/**shop links */}
  
            <ul className='space-y-2 text-gray-500'>
                          <h3 className='text-lg  font-bold text-black mb-4'>shop</h3>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>all cars</Link>
                    
                </li>
                   <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>new arrivals</Link>
                    
                </li>
                   <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>top sales</Link>
                    
                </li>
                   <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>secondhand</Link>
                    
                </li>
            </ul>

            {/**support links */}
               <div>
                 <ul className='space-y-2 text-gray-500'>
                          <h3 className='text-lg  font-bold text-black mb-4'>support</h3>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>contact us</Link>
                 
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>about us</Link>
                 
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>FAQs</Link>
                 
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>features</Link>
                 
                </li>
            </ul>
               </div>
               {/**follow us */}
               <div>
                  <h3 className='font-bold text-black mb-4'>follow us

               </h3>
               <div className='flex items-center space-x-4 mb-6'>
 
                <a href="http://www.facebook.com" target='_blank' className=' hover:text-gray-600'>
                <TbBrandMeta className='h-5 w-5'/>
                
                </a>
                <a href="http://www.facebook.com" target='_blank' className=' hover:text-gray-600'>
                <IoLogoInstagram className='h-5 w-5'/>
                
                </a>
                <a href="http://www.facebook.com" target='_blank' className=' hover:text-gray-600'>
                <RiTwitterXLine className='h-4 w-4'/>
                
                </a>
                
               </div>
               <p className='text-gray-600 mb-2'>call us</p>
               <p>
                <FiPhoneCall className='inline-block mr-2'/>
                0794494797
               </p>
             
               </div>
        </div>
        {/**footer bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-600 text-xs tracking-tighter text-center'>2025, compileTab. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
