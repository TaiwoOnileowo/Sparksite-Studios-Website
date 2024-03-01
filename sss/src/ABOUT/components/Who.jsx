import React from "react";
import { layout } from "../../style";
import styles from "../../style";
import sparksites from "./sparksites.png";
const Who = () => {
  return (
    <section
      id="who"
      className="flex md:flex-row flex-col bg-[#F8F8F9] justify-center items-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div
          className={`flex justify-center mr-0 md:mt-0 md:pr-14 w-full md:max-w-[550px] md:max-h-[450px] md:pt-16`}
        >
          <img
            src={sparksites}
            alt="sparksites studio"
            className="w-[100%]"
            loading="lazy"
          />
        </div>
        <div
          className={`${layout.sectionInfo} pt-16 md:pt-24 justify-center flex px-4 flex-col md:justify-normal max-w-[650px] md:max-w-[750px]`}
        >
          <h3 className={`${styles.heading2} text-left`}>Who Are We? </h3>
          <p className="font-normal text-[24px] WorkSans my-6 leading-9">
            We are Sparksites Studios, a digital organization formed to web
            solutions for companies, businesses and startups, we exploit all
            technologies involved in web design. With a team of seasoned
            professionals, each project is transformed into a digital master
            piece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who;
