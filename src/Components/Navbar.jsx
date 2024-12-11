import React from 'react';
import logo from '../images/logo.png' // Adjust the path if your logo is in a different folder

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-black via-green-900 to-green-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-start">
        <img src={logo} alt="Asteya International Logo" className="w-[238px] h-[70px]" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-white">
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
          <a href="#products" className="hover:text-green-400">
            Products
          </a>
          <a href="#about" className="hover:text-green-400">
            About us
          </a>
          <a href="#blogs" className="hover:text-green-400">
            Blogs
          </a>
        </nav>

        {/* Contact Us Button */}
        <div>
          <button
            className="bg-[#39B54A] text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
