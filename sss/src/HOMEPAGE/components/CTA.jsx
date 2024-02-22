import React from "react";
import { buttonLinks } from "../constants";

const CTA = () => {
  return (
    <section>
      <div className="bg-CTA-image bg-cover h-[400px] bg-center md:bg-fixed">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex items-center md:items-start pt-16 md:pt-6 md:ml-32 flex-col max-w-[430px]">
            <h2
              className={`leading-[38.8px] md:leading-[68.8px] text-[39px] md:text-[58px]  text-white md:text-left  text-center md:px-0 px-6`}
            >
              Lets Try Our Service Now!
            </h2>
            <p className="font-roboto font-semibold text-[20px] md:text-[28px] leading-[24px] md:leading-[40px] text-white my-2 pl-12 sm:pr-2 pr-4 md:pl-0 md:pr-0">
              Your Brand Needs an Upgrade! Try our services now and embark on a
              journey of innovation and success. Elevate Your Brand's Online
              Presence Now!
            </p>
          </div>
          <div className="justify-center items-center sm:justify-start md:justify-center px-0 sm:px-14 md:px-0 md:py-0 py-6 md:mr-48 flex">
            <a href={buttonLinks[0].link} className="link-cta ml-[50px] sm:ml-0 md:ml-0  md:mt-[40px] sm:mt-[10px]">
              <span className="span ">Get Started</span>
              <div className="liquid"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
