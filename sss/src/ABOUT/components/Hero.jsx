import React from "react";
import styles from "../../REUSED/constants/style";

const Hero = () => {
  return (
    <section className="pt-[72px] xs:pt-[108px] sm:pt-[120px]">
      <div className="w-full relative">
        <img
          src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/winfnifungv4uavsfi8p.jpg"
          className="w-full h-[160px] xs:h-[185px] ss:h-[250px] md:h-[350px] sm:h-[300px]"
          alt="Elevate Your Brand Image"
        />
      </div>
      <div className="absolute sm:max-w-[500px] md:max-w-[700px] max-w-[340px] sm:top-[15%] top-[30%] ts:top-[25%] xs:top-[24%] ss:top-[22%] xs:translate-x-1 ss:translate-x-14 ts:translate-x-[68%] justify-center flex md:translate-x-[122%] md:top-[35%]">
        <h1
          className={`text-center ${styles.heading2} max-w-[270px] ss:max-w-[400px] sm:max-w-[450px] md:max-w-[500px]
 text-white`}
        >
          Take Your
          <span className="text-[#03a1fe] text-[28px] xs:text-[38px] ss:text-[40px] sm:text-[45px] md:text-[50px]">
            {" "}
            Brand
          </span>{" "}
          To The{" "}
          <span className="text-[#03a1fe] text-[28px] xs:text-[38px] ss:text-[40px] sm:text-[45px] md:text-[50px]">
            Next Level
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
