import React from 'react';
import logo from '../images/logo.png'; // Adjust the path if your logo is in a different folder

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-black via-green-900 to-green-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-48" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#" className="text-white hover:text-green-400">Home</a>
          <a href="#" className="text-white hover:text-green-400">About</a>
          <a href="#" className="text-white hover:text-green-400">Services</a>
          <a href="#" className="text-white hover:text-green-400">Contact</a>
        </nav>

        {/* Button Section */}
        <div>
          <button className="bg-[#39B54A] hover:bg-green-600 text-white  rounded-lg text-lg font-medium flex justify-center items-center w-[10rem] p-2">
             Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
