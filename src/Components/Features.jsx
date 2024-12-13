import React from 'react';

const FeaturesSection = () => {
  return (
    <section className=" py-12" style={{
      backgroundImage: `url('/map.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto text-center">
        <h2 className="text-green-600 font-semibold text-xl mb-2 lg:text-xl sm:text-md md:text-lg">Why choose us?</h2>
        <h3 className="xl:text-5xl lg:text-4xl md:text-2xl text-3xl font-bold text-gray-800 "> 
          Wide Product Selection, Fast Global Shipping, <br /> Unmatched Customer Satisfaction :)
        </h3>

      
        <div className="mb-12 mt-12 lg:mt-40 flex justify-center items-center"> 
          <div className="flex gap-8  overflow-x-auto grid md:grid-cols-2 md:gap-6 md:px-12 lg:grid-cols-4 ">
            <div className="bg-white border border-gray-300 shadow-lg -lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Endless Variety</h4>
              <p className="text-gray-600">
                Shop from thousands of products across multiple categories, all in one place.
              </p>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg -lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Secure Shipping</h4>
              <p className="text-gray-600">
                Enjoy fast, reliable, and secure shipping worldwide tracking every step of the way.
              </p>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg -lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Tailored Quotation</h4>
              <p className="text-gray-600">
                Get personalised quotes based on specific products and preferences.
              </p>
            </div>

            <div className="bg-white border border-gray-300 shadow-lg -lg p-6 hover:shadow-xl transition flex-shrink-0 w-60 md:w-64">
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
