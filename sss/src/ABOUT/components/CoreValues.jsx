import React from "react";
import { layout } from "../../REUSED/constants/style";
import styles from "../../REUSED/constants/style";
import corevalues from "../assets/corevalues.svg";
const CoreValues = () => {
  return (
    <section
      id="who"
      className="flex md:flex-row flex-col bg-[#F8F8F9] justify-center items-center md:mb-[40px] pb-6"
    >
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div
          className={`flex justify-center w-full items-center md:max-w-[450px] md:mt-[200px]`}
        >
          <img
            src={corevalues}
            alt="sparksites studio core values"
            className="w-[100%]"
          />
        </div>
        <div
          className={`${layout.sectionInfo} pt-16 md:pt-24 justify-center flex px-4 md:pl-24 ss:px-8 sm:px-8 md:px-0 flex-col md:justify-normal max-w-[650px] md:max-w-[600px]`}
        >
          <h3 className={`${styles.heading2} text-left`}>Our Core Values</h3>
          <p className="font-normal text-[20px] xs:text-[22px] ss:text-[24px] WorkSans mt-4 mb-2 leading-9">
            At SparkSites Studios, these are our core values:
          </p>
          <ul className="ul">
            <li className="text-[18px] xs:text-[20px] ss:text-[21px] WorkSans leading-[35px] pt-[2px]">
              <b>Sustainability:</b> We strive to create lasting value that
              benefits our clients.
            </li>
            <li className="font-normal text-[18px] xs:text-[20px] ss:text-[21px] WorkSans leading-[35px] pt-[2px]">
              <b>Passion:</b> Passion drives us forward and fuels our creativity.
            </li>
            <li className="font-normal text-[18px] xs:text-[20px] ss:text-[21px] WorkSans leading-[35px] pt-[2px]">
              <b>Accuracy: </b>We understand the importance of precision and
              attention to detail.
            </li>
            <li className="font-normal text-[18px] xs:text-[20px] ss:text-[21px] WorkSans leading-[35px] pt-[2px]">
              <b>Reliablity:</b> Our clients can rely on us to consistently
              deliver high-quality work, on time and within budget.
            </li>
            <li className="font-normal text-[18px] xs:text-[20px] ss:text-[21px] WorkSans leading-[35px] pt-[2px]">
              <b>Knowledge:</b> We're dedicated to staying at the forefront of
              our industry, through continuous learning and development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
