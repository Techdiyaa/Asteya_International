export default function ExploreProducts() {
    return (
      <>
        <div className="bg-[#39B54A1A]   mt-8 relative pb-40 ">
          <div className="grid xl:grid-cols-12 lg:grid-cols-12 flex grid-cols-6">
            <div className="col-span-6 flex flex-col  justify-center  pb-6 pr-8 pl-20 pt-20 z-10">
              <div className=" text-[#39B54A] font-bold lg:text-xl sm:text-md md:text-lg">Products</div>
              <div className="font-bold mt-4 xl:text-5xl lg:text-4xl md:text-3xl text-2xl">Luxury on mind</div>
              <div className="text-lg mt-4 text-[#00000080]">
                Quality, Design, Trends all at one platform - skim through our
                wide range of products to get the one that suits you!
              </div>
              <div className="mt-8">
                <button className="rounded flex justify-center items-center bg-[#39B54A] px-6 py-3 text-white">
                  Explore Products
                </button>
              </div>
            </div>
  
            <div className=" flex justify-end items-center relative hidden xl:col-span-6 lg:col-span-6 xl:flex lg:flex">
             
              <img
                src="curve.png"
                alt="Curve"
                className="h-80 object-contain relative "
              >

               
              </img>
              <img src='products.png' className='h-80 absolute justify-center items-center flex pr-20 '>
              </img>
              
             
            </div>
          </div>
        </div>
      </>
    );
  }
  