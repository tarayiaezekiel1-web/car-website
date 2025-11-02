import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductsGrid from '../components/products/ProductsGrid'
import FeaturedCollection from '../components/products/FeaturedCollection'
import FeaturesSection from '../components/products/FeaturesSection'
import TopSales from '../components/products/TopSales'
import RecomendedCars from '../components/products/RecomendedCars'
import SecondHand from '../components/products/SecondHand'


const Home = () => {
  return (
    <div>
      <Hero/>
      <GenderCollectionSection/>
      <NewArrivals/>

      {/**best seller
      <h2 className='text-2xl text-center font-bold mb-4'>Best seller</h2>
      <ProductDetails/> */}
     
      <div className='container mx-auto'>

        {/**    <h2 className='text-2xl text-center font-bold mb-4'>Top ware for women</h2>
         <ProductsGrid products={PlaceholderProducts}/>  */}
    
        <TopSales/>
        <RecomendedCars/>
        <SecondHand/>
        
      </div>
      <FeaturedCollection/>
      <FeaturesSection/>
    </div>
  )
}

export default Home
