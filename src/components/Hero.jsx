import React from "react";

import google from "../assets/google.png";
import apple from "../assets/apple.svg";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-6 lg:pr-47">
            <h1
              data-aos="fade-up"
              className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-5xl font-bold"
            >
              Dedicated App for the Church, Preachers & Children of God.
            </h1>
            <p
              className="font-bold text-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              ontoGod is designed to bring you closer to the word of God,
              Christian community, churches and Pastors/Preachers.
            </p>

            <div class="flex mt-10">
              <p>
                <img
                  className="h-20 w-44"
                  style={{ width: 210 }}
                  src={google}
                  alt=""
                />
              </p>
              <p>
                <img
                  className="h-20 w-40"
                  style={{ width: 182 }}
                  src={apple}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
