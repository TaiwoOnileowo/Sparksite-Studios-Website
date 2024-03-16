import React from "react";
import { layout } from "../../REUSED/constants/style";
import styles from "../../REUSED/constants/style";

const Hero = () => {
  return (
    <section
      id="product"
      className={`flex md:flex-row bg-[#F8F8F9] justify-center max-h-[520px] xs:max-h-[580px] sm:max-h-[375px] md:max-h-[600px] w-full xs:mt-[100px] ss:mt-[125px] ts:mt-[120px] sm:mt-[125px] pt-[60px] xs:pt-[70px] ts:pt-[50px] sm:pt-0 ss:mb-8 md:mr-2`}
    >
      <div className="flex md:flex-row sm:flex-row flex-col-reverse mt-0 xs:pb-8 h-[500px]">
        <div
          className={`${layout.sectionInfo} pt-[15px] sm:pt-[30px] md:pt-[50px] px-6 ss:px-8 max-w-[680px]`}
        >
          <h1 className={`${styles.heading2} text-black font-medium`}>
            Elevate Your Brand's Online Presence with
            <br className="sm:block hidden" /> Sparksites Studios
          </h1>
          <div className="flex flex-row flex-wrap mt-6 md:mt-10 ">
            <a href="#get-started">
              <button
                className={`roboto font-medium text-[14px] xs:text-[16px] ss:text-[18px] text-white rounded-full py-3 px-4 color-1 btn3`}
              >
                Request A Proposal
              </button>
            </a>
          </div>
        </div>
        <div
          className={`justify-center items-start flex md:max-w-[720px] w-full sm:max-w-[400px]`}
        >
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_50/dpr_auto/lkasjm7aj14nrfun6kbc.jpg"
            alt="Elevate Your Brand Image"
            className="h-[200px] xs:h-[250px] ss:h-[300px] ts:h-[350px] md:h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
