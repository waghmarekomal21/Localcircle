import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import logo from './../assets/Images/logo.gif';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white top-0' style={{ position: 'sticky', zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <img src={logo} className="w-[200px] object-cover top-0 start-0" />
          <div className="md:hidden">
            <button className="text-black hover:text-red-700 text-2xl px-3 py-2"onClick={toggleMenu}>
              <HiMenu />
            </button>
            {isMenuOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2  right-0">
                <a href="#"className="block px-4 py-2 text-black hover:bg-gray-100">Home</a>
                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">About Us</a>
                <a href="#"className="block px-4 py-2 text-black hover:bg-gray-100"> Pricing</a>
                <a href="#"className="block px-4 py-2 text-black hover:bg-gray-100">Download</a>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="ml-auto flex items-baseline space-x-4">
              <a href="#"className="text-black hover:text-red-700 text-2xl px-3 py-2"> Home</a>
              <a href="#About"className="text-black hover:text-red-700 text-2xl px-3 py-2">About Us</a>
              <a href="#"className="text-black hover:text-red-700 text-2xl px-3 py-2">Pricing</a>
              <a href="#Download"className="text-black hover:text-red-700 text-2xl px-3 py-2">Download</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
