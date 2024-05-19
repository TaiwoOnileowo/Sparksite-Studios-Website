import React from "react";
import styles from "../../REUSED/constants/style";
const CTA = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-brand bg-cover w-full h-[320px] xs:h-[340px] ss:h-[300px] sm:h-[350px] bg-center md:bg-fixed">
        <div className="flex  md:pt-12 px-6  sm:px-10 ss:px-[24px] ts:px-[35px] w-[200px] text-center xs:text-left xs:w-[300px] ss:w-full md:px-16 sm:max-w-[400px] ss:max-w-[330px] ts:max-w-[400px] md:max-w-[500px]">
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
        <div className="flex px-4 ts:px-[35px] sm:px-10 md:px-16 md:w-[400px] mt-2 ss:mt-6 items-start">
          <a href="/services#get-started">
            <button className={`${styles.button} btn3`}>Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
