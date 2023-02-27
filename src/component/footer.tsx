import React from 'react'



const Footer = () => {
 
  return (
    <footer className='bg-stone-900 text-white px-5'>
      <div className=" grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 md:px-16 py-10 md:py-24">
        <div className="item ">
          <div className="text-2xl md:text-3xl text-white/[.90] mb-4 md:mb-8">Opening Time</div>
          <ul className="text-base md:text-xl text-white/[.55] space-y-2 md:space-y-3">
            <li>Mon-Fri : 8AM - 10PM </li>
            <li>Sat : 9AM - 8PM</li>
            <li>Sun : Closed</li>
            <li>We Work All The Holidays</li>
          </ul>
        </div>
        <div className="item ">
          <div className="text-2xl md:text-3xl text-white/[.90] mb-4 md:mb-8">Quick Link</div>
          <ul className="text-base md:text-xl text-white/[.55] space-y-2 md:space-y-3">
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Order Tracking</li>
            <li>Privacy Policy</li>
            <li>Shipping Information</li>
          </ul>
        </div>
        <div className="item ">
          <div className="text-2xl md:text-3xl text-white/[.90] mb-4 md:mb-8">Information</div>
          <ul className="text-base md:text-xl text-white/[.55] space-y-2 md:space-y-3">
            <li>About Us</li>
            <li>Shopping Guide</li>
            <li>Delivery Information</li>
            <li>Privay Policy</li>
            <li>Our Store</li>
          </ul>
        </div>
        <div className="item text-right col-span-2 lg:col-span-1">
          <p className=" text-3xl md:text-5xl text-white/[.90] ">123 Widest Street </p>
          <p className="text-3xl md:text-5xl text-white/[.90] my-2">Acmeville,AC-1209</p>
          {/* <div className="mr-10 grid justify-items-end"> */}
         <p className=' mt-3 md:mt-10 text-white/[.55] md:text-3xl   '>demo@example.com</p>
         <p className='md:mt-4 text-white/[.55]    text-3xl  '>+0123456789</p>
          {/* </div> */}
            

        </div>

      </div>
     
    </footer>
  )
}

export default Footer