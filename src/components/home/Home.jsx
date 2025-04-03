import React from 'react'

import Testimonial from '../testimonial/Testimonial'
import CardComponent from '../card/Card'
import PackageGrid from '../card/package/Packages'
import gif from '../../assets/gif.gif'
const Home = () => {
  return (
    <>
    
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#fff] to-[#cfe9fc] ">
    
    <img src={gif} alt="" className='w-[250px] h-[250px] opacity-70' />

      <h1 className='text-6xl  font-semibold text-orange-500 mb-8'>SPT Investment Advisor..!</h1>
      <p className='text-3xl text-[#055389] font-medium text-center'>Unlock Hidden Gems, Maximize Wealth<br/> 
      Your Ultimate Multibagger Stock Advisory!</p>
      <p className='text-2xl text-orange-500 font-medium text-center mt-30 underline'>From the house of Tulsian Group..!</p>
    </div>
    
    {/* Offers and Multibagger calls */}

    <h1 className='text-4xl font-bold text-center mt-10'>Our Offerings</h1>
    <p className='text-center text-[#F25116] text-2xl font-medium mt-2'>Multibagger Calls</p>
        <CardComponent />
    {/* End of Offers and Multibagger calls */}
    
    {/* Packages */}
    <h1 className='text-4xl font-bold text-center mt-10 mb-5'>Our Packages</h1>
    <p className='text-center text-[#F25116] text-2xl font-medium mb-10'>Multibagger Calls</p>
    <PackageGrid />
    {/* End of Packages */}

    <div className='container mx-auto px-4 lg:px-6'>
        <Testimonial />
    </div>
    </>
  )
}

export default Home