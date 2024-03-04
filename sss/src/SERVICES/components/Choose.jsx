import React from "react";
import { layout } from "../../REUSED/constants/style";
import styles from "../../REUSED/constants/style";
const Choose = () => {
  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-normal md:items-stretch items-center">
        <div
          className={`${layout.sectionInfo} pt-6 xs:pt-12 md:pt-44 md:pl-16 px-4 ss:px-8 sm:px-4 max-w-[650px] md:max-w-[650px]`}
        >
          <h3 className={`${styles.heading2}`}>Why Choose Us?</h3>
          <ul className="ul mt-4 xs:mt-6">
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[30px] xs:leading-[40px]">
              Affordable rates tailored to your budget.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[30px] xs:leading-[40px]">
              Creative and personalised solutions.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[30px] xs:leading-[40px]">
              Timely delivery of projects.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[30px] xs:leading-[40px]">
              Clear communication throughout the development process.
            </li>
            <li className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto leading-[30px] xs:leading-[40px]">
              A commitment to ensuring your satisfaction.
            </li>
          </ul>
        </div>

        <div
          className={`flex justify-center md:pr-[40px] md:pl-16 mr-0 mt-0 sm:w-full md:w-[720px] xs:h-[200px] ss:h-[300px] sm:h-[350px] md:h-[550px] md:pt-32`}
        >
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/choose_mowxd9.jpg"
            alt="choose us image"
            className="w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
