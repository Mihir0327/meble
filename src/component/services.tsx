import React from 'react'

const Services = () => {
  return (
    <div className='my-10 grid max-h-[50%] space-y-5 md:space-y-0 sm:grid-cols-1 md:grid-cols-3 md:gap-8 sm:px-8 md:px-16 py-10 md:py-16  justify-center w-full  bg-stone-900'>
        <div className="space-y-4 w-fit h-fit max-h-[25%]">
        <img className="max-h-40 m-auto" src="/images/world-wide-delivery.png" alt="" />
        <h2 className='text-center md:text-lg md:font-semibold text-white/[.90] pt-3'>DELIVERY WORDWIDE</h2>
       <p className='text-center text-base m-auto text-white/[.55] w-[80%]'>Sit back and relax ! We put your new furniture into place and take all rubbish with us.</p>
        </div>
        <div className="space-y-4 w-fit h-fit">
        <img className="max-h-40  m-auto" src="/images/worry.png" alt="" />
        <h2 className='text-center md:text-lg md:font-semibold text-white/[.90] pt-3'>WORRY-FREE PURCHASING </h2>
        <p className='text-center text-base m-auto w-[75%] text-white/[.55]'>Your new FEST piece comes with a 3-Year Warranty, Including at-home repair service. </p>
        </div>
        <div className="space-y-4">
        <img className="max-h-40 m-auto" src="/images/EFF_logo.png" alt="" />
        <h2 className='text-center md:text-lg md:font-semibold text-white/[.90] pt-3'>FROM OVER 100 FABRICS</h2>
        <p className='text-center  text-base m-auto w-[70%] text-white/[.55]'>Mix and match. Create your one-of-a-kind piece of furniture.</p>
        </div>


    </div>
  )
}

export default Services