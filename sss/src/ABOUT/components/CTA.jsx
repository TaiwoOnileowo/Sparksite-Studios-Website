import React from "react";
import styles from "../../REUSED/constants/style";
const CTA = () => {
  return (
    <section>
      <div className="bg-align bg-cover flex flex-col sm:flex-row w-full justify-center sm:justify-between items-center h-[220px] xs:h-[250px] md:h-[280px] bg-center md:bg-fixed">
        <div className="flex flex-col px-6 sm:px-10 md:px-16 justify-center items-center ss:max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
          <h1 className={`${styles.heading3} text-white`}>
            We Create{" "}
            <span className="text-[#8a2be2] text-[24px] xs:text-[25px] ss:text-[28px] sm:text-[30px] md:text-[35px]">
              Websites
            </span>{" "}
            That{" "}
            <span className="text-[#8a2be2] text-[24px] xs:text-[25px] ss:text-[28px] sm:text-[30px] md:text-[35px] ">
              {" "}
              Align
            </span>{" "}
            With Your Business
            <span className="text-[#8a2be2] text-[24px] xs:text-[25px] ss:text-[28px] sm:text-[30px] md:text-[35px] ">
              {" "}
              Goals
            </span>{" "}
          </h1>
        </div>
        <div className="flex sm:justify-center px-6 md:px-0  mt-2 ss:mt-6 md:w-[400px] items-start sm:items-center">
          <a href="/services#get-started">
            <button className={`${styles.button} btn3 text-white rounded-full`}>
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
