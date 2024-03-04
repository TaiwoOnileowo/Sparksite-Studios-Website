import React from "react";
import { layout } from "../../REUSED/constants/style";
import { buttonLinks } from "../../REUSED/constants";
import styles from "../../REUSED/constants/style";
// import uiux from "../assets/uiux.png";
// import choose from "../assets/choose.png";
const MoreDeeds = () => {
  return (
    <section id="product" className={`flex md:flex-row flex-col`}>
      <div className="flex flex-col md:flex-row justify-center md:justify-normal md:items-stretch items-center">
        <div
          className={`flex justify-center mr-0 md:mt-0 md:pl-[60px] md:pr-14 w-full md:max-w-[750px] md:max-h-[600px] md:pt-32`}
        >
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/choose_mowxd9.jpg"
            alt="choose us image"
            className="w-[100%]"
          />
        </div>
        <div
          className={`${layout.sectionInfo} md:pr-16 pt-16 px-4 ss:px-10 md:px-0 md:pt-36 flex flex-col md:justify-center max-w-[690px] md:max-w-[750px]`}
        >
          <h2 className={`${styles.heading2} pb-6`}>Why Choose Us?</h2>
          <ul className="ul">
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[40px]">
              Affordable rates tailored to your budget.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[40px]">
              Creative and personalised solutions.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[40px]">
              Timely delivery of projects.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] WorkSans leading-[40px]">
              Clear communication throughout the development process.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] WorkSans leading-[40px]">
              A commitment to ensuring your satisfaction.
            </li>
          </ul>
          <p className="font-normal text-[16px] xs:text-[24px] WorkSans my-6 leading-9"></p>
          <div className="flex flex-row flex-wrap md:mt-0 sm:mt-10">
            <a href={buttonLinks[0].link}>
              <button className={`${styles.button} btn3`}>Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreDeeds;
