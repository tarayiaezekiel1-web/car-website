import React from 'react'
import { Link } from 'react-router-dom'
import red from "../../assets/red.jpg"

const FeaturedCollection = () => {
  return (
   <section className='py-16 px-4 lg:px-0'>
    <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl'>
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
        <h3 className='text-lg font-semibold text-gray-700 mb-2'> luxury and power</h3>

        <h4 className='text-2xl lg:text-4xl font-bold mb-6'>
            discover our 2024 land Cruiser
        </h4>
        <p className='text:lg text-gray-500 mb-6 tracking-tighter'>
            discover our umatched confort, off-rad strength, and sleek design in one powerful package. The new car models that redefines adventure
        </p>
        <Link  to="/collections/all" className='bg-black text-white px-6 py-3 rounded-lg txxt-lg hover:bg-gray-700'>
        buy now</Link>

        </div>
        {/**right content */}
        <div className='lg:w-1/2'>
            <img src={red} alt="feartured collection"
            className='w-full h-full object-cover lg:rounded-tr-3xl ' />

        </div>

    </div>
   </section>
  )
}

export default FeaturedCollection
