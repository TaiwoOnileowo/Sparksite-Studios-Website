import React from "react";
import styles from "../../REUSED/constants/style";

const CTA = () => {
  return (
    <section>
      <div className="bg-CTA-image bg-cover h-[320px] xs:h-[340px] ss:h-[300px] bg-center md:bg-fixed">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex items-center md:items-start pt-6 ss:pt-8 md:pt-12 md:ml-32 flex-col max-w-[430px]">
            <h2
              className={`${styles.heading3} text-white text-left ml-[13px] xs:ml-0 ss:-ml-[22px] md:ml-0 sm:ml-[1px] font-bold`}
            >
              Lets Try Our Service Now!
            </h2>
            <p className="roboto text-[16px] xs:text-[18px] sm:text-[19px] md:text-[22px] xs:leading-[28px] ts:px-14 md:leading-[35px] px-2 text-white my-[5px] ss:my-2 md:mx-0 xs:px-4 md:pl-0 md:pr-0">
              Your brand needs an upgrade! Try our services now and take your
              brand to the next level. Elevate your brand's online presence now!
            </p>
          </div>
          <div className="flex md:justify-center px-8 xs:px-12 mt-2 ss:mt-4 md:px-0 md:w-[400px] items-start md:items-center">
            <a href="/services#get-started">
              <button className={`${styles.button} btn3`}>Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
