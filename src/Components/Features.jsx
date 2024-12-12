import React from 'react';

const FeaturesSection = () => {
  return (
    <section className=" py-12 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-green-600 font-semibold text-xl mb-2">Why choose us?</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Wide Product Selection, Fast Global Shipping,  Unmatched Customer Satisfaction :)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 ">
          {/* Feature 1 */}
          <div className="bg-white  border-1 border[#E5E5E5] border shadow-lg -lg p-6 hover:shadow-xl transition">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">Endless Variety</h4>
            <p className="text-gray-600 text-lg">
              Shop from thousands of products across multiple categories, all in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border-1 border[#E5E5E5] border shadow-lg -lg p-6 hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Secure Shipping</h4>
            <p className="text-gray-600">
              Enjoy fast, reliable, and secure shipping worldwide tracking every step of the way.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white  border-1 border[#E5E5E5] border shadow-lg -lg p-6 hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Tailored Quotation</h4>
            <p className="text-gray-600">
              Get personalised quotes based on specific products and preferences.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white  border-1 border[#E5E5E5] border shadow-lg -lg p-6 hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Global Reach</h4>
            <p className="text-gray-600">
              Get trending global products that are in trend with best shipping support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
