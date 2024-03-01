import React from "react";
import { layout } from "../../style";
import styles from "../../style";
const Transform = () => {
  return (
    <section id="product" className={`flex md:flex-row flex-col`}>
      <div className="flex flex-col md:flex-row justify-center md:justify-normal items-center">
        <div
          className={`flex justify-center mr-0 md:mt-0 md:pl-[60px] md:pr-14 w-full md:max-w-[750px] sm:h-[400px] h-[180px] xs:h-[200px] ss:h-[300px] md:h-[550px] md:pt-32`}
        >
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_50/dpr_auto/sfrgip9h3hat22hnbxan.jpg"
            alt="Transform Business Image"
            className="w-[100%]"
          />
        </div>
        <div
          className={`${layout.sectionInfo} md:pr-16 sm:py-6 md:py-0 pt-16 md:pt-[125px] flex px-4 ss:px-8 sm:px-4 flex-col md:justify-normal max-w-[650px] md:max-w-[750px]`}
        >
          <h3 className={styles.heading2}>
            Transforming Brands <br className="sm:block hidden" />
            Through Quality Web Solutions
          </h3>
          <p className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto py-4 xs:my-6 leading-9">
            Embark on a transformative journey with Sparksites Studios, where we
            redefine the future of your brand through our quality web solutions.
            Our innovative approach leverages the latest advancements to propel
            your brand into new realms of success and engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transform;
