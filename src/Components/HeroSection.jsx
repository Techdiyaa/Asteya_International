import React from 'react';
import plateImage from '../images/homepg_img.png'; // Replace with the correct image file name

 const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-green-900 to-green-800 text-white  ">
      <div className=" mx-auto grid grid-cols-12 items-center justify-center flex ">
        <div className=" px-6 sm:px-12 md:px-16 lg:px-24 relative lg:col-span-6 xl:col-span-6 col-span-12 mb-12 ">
        <h1 className="xl:text-5xl lg:text-4xl  md:text-4xl  text-3xl font-bold mb-4 ] leading-[3rem] lg:leading-[4rem] xl:leading-[4.7rem]"  >
  OneStop for 
  <span className="relative inline-block">
    <span className=" ">&nbsp;Quality&nbsp;</span>
    <img className="absolute w-full h-[10px] xl:-bottom-3 lg:-bottom-3 -bottom-1 left-0" src="quality_line.svg" alt="Quality line" />
  </span>
  Products, Delivered Worldwide!
</h1>


          <p className="text-gray-300 xl:text-lg lg:text-lg md:text-md text-sm mb-6 xl:mt-12 lg:mt-12 md:mt-8  ">
            Get customised quotes for the products and services you need, with expert solutions tailored to your
            requirements. We offer reliable and efficient service delivery to clients worldwide.
          </p>
          <button className="bg-[#39B54A] hover:bg-green-600 text-white p-2  xl:mt-12 lg:mt-12 mt-8 rounded-lg xl:text-lg lg:text-lg md:text-md text-sm font-medium grid grid-cols-8 items-center justify-center">
            <span className='col-span-6'>Explore Products</span> 
            <span className="ml-2 col-span-2"><img src='right_arrow.png' ></img></span>
          </button>
        </div>

        
       <div className="relative xl:col-span-6 lg:col-span-6 col-span-12 flex justify-end ">
       <div className="flex justify-end">
  <div className="relative">
  
    <img src="plate_image.png" alt="Decorative Plate" className="xl:w-[32rem] lg:w-[28rem] md:w-[20rem] sm:w-[16rem] w-[14rem]   z-0" />
  </div>
</div>

</div>

      </div>
    </section>
  );
}
export default HeroSection