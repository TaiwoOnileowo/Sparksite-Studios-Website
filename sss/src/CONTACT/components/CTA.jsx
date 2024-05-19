import React from "react";
import styles from "../../REUSED/constants/style";
const CTA = () => {
  return (
    <section>
      <div className="bg-partner bg-cover h-[180px] xs:h-[200px] sm:h-[250px] md:h-[300px] bg-center flex items-center md:bg-fixed">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:px-24 w-full h-full">
          <h1 className={`${styles.heading3} text-white sm:w-[380px]`}>
            Make Us Your<br/>
            <span className="text-[#00BFFF] text-[22px] xs:text-[25px] ss:text-[28px] sm:text-[32px] md:text-[35px] ">
              {" "}
              Digital Partner
            </span>{" "}
            Today!
          </h1>
          <a href="/services#get-started">
            <button
              className={`roboto font-medium text-[14px] xs:text-[16px] ss:text-[17px] text-white rounded-full py-3 px-4 color-1 btn3 my-6`}
            >
              Request A Proposal
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
