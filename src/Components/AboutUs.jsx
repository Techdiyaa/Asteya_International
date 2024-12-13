export default function AboutUs() {
    return (
      <>
        <div className="grid grid-cols-6 items-center  justify-center md:grid  xl:grid-cols-12 lg:grid-cols-12 xl:grid lg:grid  ">
          {/* Image Section */}
          <div className="col-span-6 flex justify-center items-center">
  <img src="about.png" alt="About Us" className="max-w-full h-auto" />
</div>

          
          <div className=" col-span-6   mt-20">
            <h1 className=" font-bold text-[#39B54A] lg:text-xl sm:text-md md:text-lg ">About Us</h1>
            <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-gray-700 font-semibold mt-6">
              Discover ASTEYA: Trusted Platform for Quality Products and Seamless Global Shopping
            </p>
            <p className="text-lg text-[#ADB2B1] mt-6">
              At ASTEYA, we are passionate about providing a seamless and personalized shopping
              experience for customers worldwide. Our platform offers a wide range of high-quality
              products, from the latest trends to timeless essentials, all available at your fingertips.
            </p>
            <p className="text-lg text-[#ADB2B1] mt-6">
              We focus on delivering tailored solutions, offering custom quotes and handpicked
              recommendations to suit your needs. With reliable, fast, and secure shipping across the
              globe, we ensure that your orders reach you quickly, wherever you are.
            </p>
            <p className="text-lg text-[#ADB2B1] mt-6">
              Our commitment to customer satisfaction drives everything we do, making your shopping
              experience smooth and hassle-free.
            </p>
            <button className="mt-20 w-[12rem] p-3 bg-[#39B54A] text-white rounded-lg text-lg">
              Discover More
            </button>
          </div>
        </div>
      </>
    );
  }
  