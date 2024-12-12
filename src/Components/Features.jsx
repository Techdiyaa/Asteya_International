import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-green-600 font-semibold text-xl mb-2">Why choose us?</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-36"> 
          Wide Product Selection, Fast Global Shipping, <br /> Unmatched Customer Satisfaction :)
        </h3>

      
        <div className="mb-12"> 
          {/* Card Section */}
          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 md:px-4">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Endless Variety</h4>
              <p className="text-gray-600">
                Shop from thousands of products across multiple categories, all in one place.
              </p>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Secure Shipping</h4>
              <p className="text-gray-600">
                Enjoy fast, reliable, and secure shipping worldwide tracking every step of the way.
              </p>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Tailored Quotation</h4>
              <p className="text-gray-600">
                Get personalised quotes based on specific products and preferences.
              </p>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Global Reach</h4>
              <p className="text-gray-600">
                Get trending global products that are in trend with best shipping support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
