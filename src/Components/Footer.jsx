import React from 'react';

const FeaturesSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-green-600 font-semibold text-xl mb-2">Why choose us?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Wide Product Selection, Fast Global Shipping, <br /> Unmatched Customer Satisfaction :)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Endless Variety</h4>
              <p className="text-gray-600">
                Shop from thousands of products across multiple categories, all in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Secure Shipping</h4>
              <p className="text-gray-600">
                Enjoy fast, reliable, and secure shipping worldwide tracking every step of the way.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Tailored Quotation</h4>
              <p className="text-gray-600">
                Get personalised quotes based on specific products and preferences.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Global Reach</h4>
              <p className="text-gray-600">
                Get trending global products that are in trend with best shipping support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-black to-green-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/logo.png" alt="Asteya International" className="w-12 h-12 mr-4" />
            <span className="text-2xl font-bold">ASTEYA INTERNATIONAL</span>
          </div>

          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0 flex space-x-6">
            <a href="#about" className="hover:text-green-400 transition">About us</a>
            <a href="#products" className="hover:text-green-400 transition">Products</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact us</a>
            <a href="#blogs" className="hover:text-green-400 transition">Blogs</a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            2024 © All rights reserved by ASTEYA INTERNATIONAL
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-gray-400 hover:text-green-400 transition">Privacy policy</a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-green-400 transition">Terms & Conditions</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#facebook" className="hover:text-green-400 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#instagram" className="hover:text-green-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" className="hover:text-green-400 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#twitter" className="hover:text-green-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FeaturesSection;
