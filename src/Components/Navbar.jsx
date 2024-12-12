import React, { useState } from 'react';
import logo from '../images/logo.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-green-900 to-green-800 p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-48" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#" className="text-white hover:text-green-400">Home</a>
          <a href="#" className="text-white hover:text-green-400">About</a>
          <a href="#" className="text-white hover:text-green-400">Services</a>
          <a href="#" className="text-white hover:text-green-400">Contact</a>
        </nav>

        {/* Button Section for Larger Screens */}
        <div className="hidden lg:block">
          <button className="bg-[#39B54A] hover:bg-green-600 text-white rounded-lg text-lg font-medium flex justify-center items-center w-[10rem] p-2">
            Contact Us
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-black bg-opacity-80 absolute w-full top-[60px] left-0 p-4 z-10`}
      >
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-green-400">Home</a>
          <a href="#" className="text-white hover:text-green-400">About</a>
          <a href="#" className="text-white hover:text-green-400">Services</a>
          <a href="#" className="text-white hover:text-green-400">Contact</a>
          <button className="bg-[#39B54A] hover:bg-green-600 text-white rounded-lg text-lg font-medium p-2 w-full">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
