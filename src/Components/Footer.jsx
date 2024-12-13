import React, { useState } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <footer className="bg-gradient-to-r from-black via-green-900 to-green-800 text-white py-6">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo for larger screens */}
        <div className="hidden sm:flex items-center space-x-2">
          <img src="/logo.png" className="w-52" alt="Logo" />
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-green-400">
            About us
          </a>
          <a href="#products" className="hover:text-green-400">
            Products
          </a>
          <a href="#contact" className="hover:text-green-400">
            Contact us
          </a>
          <a href="#blogs" className="hover:text-green-400">
            Blogs
          </a>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="sm:hidden relative ml-auto">
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex flex-col items-center space-y-1"
          >
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>

          {menuOpen && (
            <div className="absolute top-8 right-0 bg-green-800 rounded shadow-lg p-4">
              <ul className="flex flex-col space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-green-400">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-green-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-400">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="hover:text-green-400">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 text-sm">
          {/* Copyright Text */}
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2024 All rights reserved by ASTEYA INTERNATIONAL
          </p>

          {/* Privacy & Terms Links */}
          <div className="flex space-x-8 mb-4 sm:mb-0">
            <a href="#privacy-policy" className="hover:text-green-400">
              Privacy policy
            </a>
            <a href="#terms" className="hover:text-green-400">
              Terms & Conditions
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com">
              <img src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com">
              <img src="/Instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com">
              <img src="/Linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com">
              <img src="/Twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
