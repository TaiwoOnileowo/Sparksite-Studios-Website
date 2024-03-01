import React from "react";
import { layout } from "../../style";
import styles from "../../style";

const Mission = () => {
  return (
    <section
      id="mission"
      className="flex md:flex-row flex-col bg-[#F8F8F9] pb-4"
    >
      <div className="flex flex-col  md:flex-row-reverse justify-center md:justify-normal md:items-stretch items-center">
        <div
          className={`flex justify-center items-center w-full md:ml-4 md:mr-[88px] md:max-w-[500px] md:max-h-[520px] md:mt-24`}
        >
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_50/dpr_auto/ebjv40dmxxdetlo7lubp.jpg"
            alt="mission"
            className="w-[100%]"
          />
        </div>
        <div
          className={`${layout.sectionInfo} pt-10 ss:pt-12 md:pt-20 justify-center flex px-4 ss:px-8 md:ml-28 md:pr-8 flex-col max-w-[650px] md:max-w-[550px]`}
        >
          <h3 className={`${styles.heading2} text-left`}>Our Mission </h3>
          <p className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto my-2 leading-9">
            Our mission is clear - To elevate your brand's online presence.
            Brand empowerment is our zeal. We look forward to the success of
            your brand, enhancing its success, growth, engagement, and online
            presence. We uphold transparency, reliability and expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
