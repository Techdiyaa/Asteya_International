import React from 'react';
import plateImage from '../images/homepg_img.png'; // Replace with the correct image file name

 const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-green-900 to-green-800 text-white  ">
      <div className=" mx-auto grid grid-cols-6 lg:grid-cols-12 xl:grid-cols-12 items-center justify-center flex ">
        <div className=" px-6 sm:px-12 md:px-16 lg:px-24relative col-span-6 mb-12 ">
        <h1 className="xl:text-5xl lg:text-4xl  text-3xl font-bold mb-4 relative  " style={{lineHeight:'4.7rem'}}>
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
          <button className="bg-[#39B54A] hover:bg-green-600 text-white p-2 mt-12 rounded-lg text-lg font-medium grid grid-cols-8 items-center justify-center">
            <span className='col-span-6'>Explore Products</span> 
            <span className="ml-2 col-span-2"><img src='right_arrow.png'></img></span>
          </button>
        </div>

        
       <div className="relative col-span-6 flex justify-end xl:flex lg:flex hidden">
       <div className="flex justify-end">
  <div className="relative">
    {/* Optional Lines */}
    {/* <img 
      src="green_line.png" 
      alt="Green Line" 
      className="absolute left-[70%] transform -translate-x-1/2 -translate-y-1/2"
    />
    <img 
      src="white_line.png" 
      alt="White Line" 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
    /> */}

    {/* Plate Image */}
    <img src="plate_image.png" alt="Decorative Plate" className="w-[32rem] z-0" />
  </div>
</div>

</div>

      </div>
    </section>
  );
}
export default HeroSection