import React from "react";
import { layout } from "../../REUSED/constants/style";
import styles from "../../REUSED/constants/style";
import sparksitesstudios from "../assets/sparksitesstudios.svg";
const Who = () => {
  return (
    <section
      id="who"
      className="flex md:flex-row flex-col bg-[#F8F8F9] justify-center items-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div
          className={`flex justify-center mr-0 md:pr-14 w-full md:max-w-[500px] md:max-h-[400px] sm:max-h-[530px] ss:max-h-[350px] xs:max-h-[250px] md:mt-16`}
        >
          <img
            src={sparksitesstudios}
            alt="sparksites studio"
            className="w-[100%]"
          />
        </div>
        <div
          className={`${layout.sectionInfo} pt-10 ss:pt-12 md:pt-20 justify-center flex px-4 flex-col ss:px-8 sm:px-8 md:px-0 md:justify-normal max-w-[650px] md:max-w-[500px]`}
        >
          <h3 className={`${styles.heading2} text-left`}>Who Are We? </h3>
          <p className="font-normal text-[16px] xs:text-[20px] ss:text-[24px] roboto ss:mt-2 mb-6 ss:my-6 leading-9">
            We are Sparksites Studios, a digital organization providing quality
            web solutions to brands, companies, businesses and startups. With a
            team of seasoned professionals, each project is transformed into a
            master piece surpassing the expectations of clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who;
