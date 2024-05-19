import React from "react";
import styles from "../../REUSED/constants/style";

const CTA = () => {
  return (
    <section>
      <div className="bg-CTA-image items-center justify-center sm:justify-between flex flex-col sm:flex-row bg-cover h-[320px] xs:h-[340px] ss:h-[300px] sm:h-[350px] w-[100%] bg-center md:bg-fixed">
        <div className="px-6  sm:px-10 ss:px-[24px] ts:px-[35px]  text-center xs:text-left w-[200px] xs:w-[300px] ss:w-full md:px-16 sm:max-w-[400px] ss:max-w-[330px] ts:max-w-[400px] md:max-w-[530px]">
          <h2 className={`${styles.heading3} text-white`}>
            Lets Try Our Service Now!
          </h2>
          <p className="roboto text-[12px] xs:text-[16px] sm:text-[20px] md:text-[24px] xs:leading-[28px] md:leading-[35px] text-white my-[5px] ss:my-2 ">
            Partner with us to take your brand to new heights. Let us bring to
            life that vision you have for your brand.
          </p>
        </div>
        <div className="flex md:justify-center px-8 xs:px-12 mt-2 ss:mt-6 md:px-0 md:w-[400px] items-start md:items-center">
          <a href="/services#get-started">
            <button className={`${styles.button} btn3`}>Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
