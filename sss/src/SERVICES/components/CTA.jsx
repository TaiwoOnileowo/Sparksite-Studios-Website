import React from "react";
import styles from "../../REUSED/constants/style";
const CTA = () => {
  return (
    <section>
      <div className="bg-brand bg-cover h-[200px] sm:h-[250px] md:h-[300px] bg-center md:bg-fixed">
        <div className="flex flex-col py-6 sm:py-8 md:pt-12 px-4 sm:px-10 ss:px-[24px] ts:px-[35px] md:px-16 sm:max-w-[400px] ss:max-w-[330px] ts:max-w-[400px] md:max-w-[500px]">
          <h1 className={`${styles.heading3} text-white`}>
            Boost{" "}
            <span className="text-[#00BFFF] sm:text-[32px] ss:text-[30px] xs:text-[28px] text-[25px] md:text-[35px]">
              Engagement
            </span>{" "}
            For Your{" "}
            <span className="text-[#00BFFF] sm:text-[32px] ss:text-[30px] xs:text-[28px] text-[25px] md:text-[35px]">
              Brand
            </span>{" "}
            Today!
          </h1>
        </div>
        <div className="flex px-4 ts:px-[35px] sm:px-10 md:px-16 md:w-[400px] items-start">
          <a href="/services#get-started">
            <button className={`${styles.button} btn3`}>Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
