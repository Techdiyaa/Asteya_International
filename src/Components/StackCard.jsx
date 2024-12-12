export default function StackCard() {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-20">
        <div className="relative w-full">
          <div className="w-[97%] mx-auto h-[32rem] bg-[#F7EACC] transform transition-all rounded-3xl"></div>
          
          <div className="w-[99%] lg:ml-2 ml-1 mx-auto h-[31rem] bg-[#28574C] transform transition-all absolute -top-4 rounded-3xl"></div>
          
          {/* Content Layer */}
          <div className="w-full bg-[#D3F6B1] xl:pl-28 lg:pl-28 h-[30rem] flex flex-col transform transition-all absolute -top-8 rounded-3xl p-6 shadow-lg">
            <div className="w-16 h-16 mt-12 bg-white text-black rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <div className="mt-16"> 
              <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 mb-3">
                Explore a huge variety of products<br />on the go..!
              </h2>
              <p className="xl:text-lg lg:text-lg md:text-lg text-sm mt-4 text-gray-700">
                Browse thousands of products from multiple categories<br />
                anytime, anywhere, with a seamless mobile-friendly<br />
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
