import React from 'react';
import plateImage from '../images/homepg_img.png'; // Replace with the correct image file name

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-green-900 to-green-800 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 relative">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 relative">
            OneStop for <span className="relative">
              <span className="text-green-400 underline decoration-green-600">Quality</span>
              <svg
                className="absolute w-full h-[10px] -bottom-2 left-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 10"
                fill="none"
              >
                <path
                  d="M0 5 Q50 10 100 5 T200 5"
                  stroke="#39B54A"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            Products, <br />
            Delivered Worldwide!
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Get customised quotes for the products and services you need, with expert solutions tailored to your
            requirements. We offer reliable and efficient service delivery to clients worldwide.
          </p>
          <button className="bg-[#39B54A] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center">
            Explore Products <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center items-center">
          {/* Strings (Decorative Paths) */}
          <svg
            className="absolute w-[523px] h-[558px] top-[220px] left-[843px] -z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 523 558"
            fill="none"
          >
            {/* White String */}
            <path
              d="M0 558 C463 269, 463 558, 463 0"
              stroke="white"
              strokeWidth="4"
              fill="none"
              style={{
                borderRadius: "20000px 0px 0px 0px",
                opacity: "1",
              }}
            />
            {/* Green String */}
            <path
              d="M0 558 C523 220, 523 558, 523 0"
              stroke="#39B54A"
              strokeWidth="4"
              fill="none"
              style={{
                borderRadius: "20000px 0px 0px 0px",
                opacity: "1",
              }}
            />
          </svg>

          {/* Tilted Rectangular Background with Plate */}
          <div
            className="bg-green-400 w-[280px] h-[180px] md:w-[340px] md:h-[220px] rounded-xl relative overflow-hidden shadow-lg transform rotate-[12deg]"
          >
            <img
              src={plateImage}
              alt="Decorative Plate"
              className="absolute top-[-20px] left-[50px] w-[200px] md:w-[240px] transform rotate-[-12deg]"
            />
          </div>

          {/* Decorative Stars */}
          <div className="absolute top-[20%] left-[10%] text-green-400 text-3xl animate-pulse">
            ★
          </div>
          <div className="absolute bottom-[15%] right-[10%] text-green-400 text-3xl animate-pulse">
            ★
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
