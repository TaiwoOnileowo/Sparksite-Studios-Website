import React from "react";
import styles from "../../REUSED/constants/style";
const CTA = () => {
  return (
    <section>
      <div className="bg-brand bg-cover h-[200px] sm:h-[250px] md:h-[300px] bg-center md:bg-fixed">
        <div className="flex flex-col py-6 sm:py-8 md:pt-12 px-4 md:px-16 sm:max-w-[350px] ss:max-w-[300px] md:max-w-[500px]">
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
        <div className="flex md:justify-center px-4 md:px-0 md:w-[400px] items-start md:items-center">
          <a href="/services#get-started">
            <button className={`${styles.button} btn3`}>Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
