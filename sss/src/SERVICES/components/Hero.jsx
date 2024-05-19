import React from "react";
import { layout } from "../../REUSED/constants/style";
import styles from "../../REUSED/constants/style";

const Hero = () => {
  return (
    <section
      id="product"
      className={`flex md:flex-row bg-[#F8F8F9] max-h-[520px] xs:max-h-[580px] sm:max-h-[375px] md:max-h-[600px] w-full ss:mb-8 md:mr-2`}
    >
      <div className="flex md:flex-row sm:flex-row items-center justify-between flex-col-reverse mt-0 pb-8 h-full w-full">
        <div
          className={` pt-[15px] sm:pt-[30px] md:pt-[50px] w-full items-center h-full flex-col justify-center flex`}
        >
          <h1 className={`${styles.heading2} text-black font-medium max-w-[207px] xs:max-w-[265px] ss:max-w-[302px] sm:max-w-[350px] md:max-w-[415px]`}>
            Elevate Your Brand's Online Presence with
            <br className="sm:block hidden" /> Sparksites Studios
          </h1>
          <div className=" mt-6 md:mt-10 ">
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
