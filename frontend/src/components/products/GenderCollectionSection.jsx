import React from 'react'
import { Link } from 'react-router-dom'

import medium from "../../assets/medium.jpg"
import blue from "../../assets/blue.jpg"


const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            {/**womens collection */}
            <div className='relative flex-1'>
                <img src={medium} alt="women collection" className='w-full h-[700px] object-cover'/>

                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                  <h2 className='text-2xl font-bold text-gray-700 mb-3'>
                    combact
                  </h2>
                  <Link to="/collections/all?gender=women" className='text-gray-700 underline'>shop now
                  </Link>

                </div>

            </div>
            {/**mens collection */}
            
            <div className='relative flex-1'>
                <img src={blue} alt="men collection" className='w-full h-[700px] object-cover'/>

                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                  <h2 className='text-2xl font-bold text-gray-700 mb-3'>
                    trucks
                  </h2>
                  <Link to="/collections/all?gender=men" className='text-gray-700 underline'>shop now
                  </Link>

                </div>
         </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection
