import React from 'react'
import { FaPhone,FaEnvelope,FaMapMarkerAlt } from 'react-icons/fa';
function Footer() {
  return (
    // <footer>
    //   <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-center  text-gray-500">
    //       <span>Copyright © {new Date().getFullYear()}</span>
    //       <span className=' text-blue-500'>Praman Proserv Technologies@All rights reserved.</span>
    //     </div>
    //   </div>
    // </footer>

<footer>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 h-96  ">
        <div className="flex flex-col md:flex-row justify-between text-black font-bold">
          <div className="mb-4 md:mb-0">
            <h3 className="text-4xl font-bold py-4 text-gray-700">Explore</h3>
    
           <div className='text-xl py-2'><a href="#"> Home</a></div>
           <div className='text-xl py-2'><a href="#"> About Us</a></div>
           <div className='text-xl py-2'><a href="#"> Pricing</a></div>
           <div className='text-xl py-2'><a href="#"> Download</a></div>
             
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-4xl font-bold py-4 text-gray-700">Follow Us</h3>
            <div className='text-xl py-1'><a href="#"> Privacy Poliicy</a></div>
           <div className='text-xl py-1'><a href="#"> T&C</a></div>
           <div className='text-xl py-1'><a href="#"> Legal</a></div>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-4xl font-bold py-4 text-gray-700">Get In Touch</h3>
           <div className='text-xl py-1'><a href="#"><FaPhone/> +917798511116</a></div>
           <div className='text-xl py-1'><a href="#"><FaEnvelope />info@metricsviews.com</a></div>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-4xl font-bold py-4 text-gray-700">Address</h3>
            <p className='text-xl py-1 mt-2'><a href="#"><FaMapMarkerAlt/>613, Global Business Hub,
            <p>Next to WTC,Kharadi,</p>Pune - 411 014 MH, INDIA</a></p>
            
           </div>
          </div>
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
         <div className="flex justify-center  text-gray-500">
           <span>Copyright © {new Date().getFullYear()}</span>
           <span className=' text-blue-500 '> MetricsViews@All Right Reserved</span>
         </div>
       </div>
       </div>
    </footer>

  )
}

export default Footer