import React from "react";

import Hero from "../components/Hero";
import Satelite from "../components/Satelite";
import Footer5 from "../components/Footer5";
import wp from "../assets/wp.mp4";
import "aos/dist/aos.css";
import Aos from "aos";

const MainLayout = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <div className="">
        <div className="h-[600px] relative">
          <video
            autoPlay
            loop
            muted
            className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={wp} type="video/mp4" />
          </video>

          <Hero />
        </div>
        <Satelite />
        <Footer5 />
      </div>
    </>
  );
};

export default MainLayout;
