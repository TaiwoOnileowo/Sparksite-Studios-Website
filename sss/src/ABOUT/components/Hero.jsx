import React from "react";
import build from "../assets/build.png";
const Hero = () => {
  return (
    <section className="pt-24">
      <div className="w-full relative">
        <img src={build} className="w-full h-[340px]" alt="" />
      </div>
      <div className="absolute sm:max-w-[500px] max-w-[340px] sm:top-[15%] top-[21%] translate-x-6 sm:translate-x-[55%] justify-center flex md:translate-x-[122%] md:top-[25%]">
        <h1
          className={`text-center heading2: "leading-[48.8px] md:leading-[58.8px] text-[33px] sm:text-[48px]
 text-white`}
        >
          Elevate Your Brand's Online Presence With Sparksites Studios
        </h1>
      </div>
    </section>
  );
};

export default Hero;
