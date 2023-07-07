import React from 'react'
import logo from './../assets/Images/logo.gif'

function Header() {
  return (
    // <div>
    //     <img src={logo} className='w-[200px] object-cover'/>
    // </div>

    <nav>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-20">
        <img src={logo} className='w-[200px] object-cover top-0 start-0'/>
          <div className="flex items-center">
            <div className="flex-shrink-0">
            
              {/* <span className="text-white">Logo</span> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-black hover:text-red-700 text-2xl px-3 py-2  ">
                  Home
                </a>
                <a href="#" className="text-black hover:text-red-700 text-2xl px-3 py-2 ">
                  About Us
                </a>
                <a href="#" className="text-black hover:text-red-700 text-2xl px-3 py-2 ">
                  Pricing
                </a>
                <a href="#" className="text-black hover:text-red-700 text-2xl px-3 py-2 ">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header


