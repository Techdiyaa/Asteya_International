import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-green-900 to-green-800 text-white">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 xl:grid-cols-12 items-center justify-center">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 relative col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 relative" style={{ lineHeight: '4.7rem' }}>
            OneStop for
            <span className="relative inline-block">
              <span className="text-green-400 decoration-green-600">&nbsp;Quality&nbsp;</span>
              <img className="absolute w-full h-[10px] xl:-bottom-3 lg:-bottom-3 bottom-2 left-0" src="quality_line.svg" alt="Quality line" />
            </span>
            Products, Delivered Worldwide!
          </h1>

          <p className="text-gray-300 text-lg mb-6 mt-12">
            Get customised quotes for the products and services you need, with expert solutions tailored to your
            requirements. We offer reliable and efficient service delivery to clients worldwide.
          </p>
          <button className="bg-[#39B54A] hover:bg-green-600 text-white p-2 mt-12 rounded-lg text-lg font-medium flex items-center justify-center">
            <span className="mr-2">Explore Products</span>
            <span>
              <img src="right_arrow.png" alt="Right Arrow" />
            </span>
          </button>
        </div>

        <div className="relative col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-6 xl:col-span-6 justify-end flex sm:hidden lg:flex">
          <div className="flex justify-end">
            <div className="relative">
              <img src="plate_image.png" alt="Decorative Plate" className="w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
