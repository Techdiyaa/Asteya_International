import StackCard from "./StackCard"
export default function OurOffering(){
    return(<>
        <div className='container mx-auto p-2 ' >
            <h3 className='text-[#39B54A] font-bold lg:text-xl sm:text-md md:text-lg '>Our Offering</h3>

            <div className='lg:grid lg:grid-cols-12 gap-12 mt-2   md:block '>
                <h1 className='xl:text-5xl lg:text-4xl  text-3xl font-bold col-span-6 md:pt-8 ' >Personalized Shopping experience </h1>
                <div className='text-[#ADB2B1] text-lg col-span-6 md:pt-8 mt-4'>Experience a personalized shopping journey with tailored recommendations based on your preferences. Get custom quotes for a seamless, hassle-free shopping experience</div>
            </div>
            <div className='p-2'>
            <StackCard></StackCard>
            </div>
            
            
            </div>
    </>)
}