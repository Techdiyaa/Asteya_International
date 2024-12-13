import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import OurOffering from "./Components/OurOffering";
import ExploreProducts from "./Components/ExploreProducts";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <div className=' font-outfit'>
        <Navbar />
        <HeroSection />

        <Features />
        <div className=" container mx-auto ">
          <OurOffering />
        </div>

        <div className="mt-20">
          <ExploreProducts />
        </div>
        <div className="container mx-auto p-2">
          <AboutUs />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
