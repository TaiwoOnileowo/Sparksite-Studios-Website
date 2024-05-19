import React from "react";
import styles from "../../REUSED/constants/style";
import nextlevel from "../assets/nextlevel.jpg"
const Hero = () => {
  return (
    <section className="relative flex">
      <div className="w-full">
        <img
          src={nextlevel}
          className="w-full h-[160px] xs:h-[185px] ss:h-[250px] md:h-[450px] sm:h-[300px]"
          alt="Elevate Your Brand Image"
        />
      </div>
      <div className="absolute h-full flex w-full sm:w-[50%] justify-center items-center">
        <h1
          className={`text-center ${styles.heading2} max-w-[270px] ss:max-w-[400px] sm:max-w-[450px] md:max-w-[500px]
 text-white`}
        >
          Take Your
          <span className="text-[#03a1fe] text-[28px] xs:text-[38px] ss:text-[40px] sm:text-[45px] md:text-[50px]">
            {" "}
            Brand
          </span>{" "}
          To {" "}
          <span className="text-[#03a1fe] text-[28px] xs:text-[38px] ss:text-[40px] sm:text-[45px] md:text-[50px]">
            New Heights
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
