import React, { useState, useRef, useEffect } from "react";
import styles, { layout } from "../../style";
import { services } from "../constants";

const ServiceCard = ({ icon, title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const handleScroll = () => {
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isVisible ? "show" : ""}`}>
      <div
        className={`flex flex-row w-full p-4 xs:p-6 rounded-[20px] ${
          index !== services.length - 1 ? "mb-6" : "mb-0"
        } deed `}
        ref={contentRef}
      >
        <div
          className={`w-[45px] h-[45px] xs:w-[50px] xs:h-[50px] sm:w-[64px] sm:h-[64px] rounded-full ${
            styles.flexCenter
          } bg-[#fff] ${isVisible ? "show" : ""}`}
        >
          <img
            src={icon}
            alt="star"
            className="w-[50%] h-[50%] object-contain content"
          />
        </div>
        <div className={`flex-1 flex flex-col ml-3 ${isVisible ? "show" : ""}`}>
          <h4 className="font-semibold text-white text-[16px] xs:text-[18px] sm:text-[22px] leading-[23.4px] mb-1 content">
            {title}
          </h4>
          <p className=" font-normal text-dimWhite text-[14px] xs:text-[18px] sm:text-[20px] leading-[24px] content1">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Deeds = () => {
  return (
    <section className=" w-full py-16 px-2 md:px-4 color-2">
      <div className="flex flex-col">
        <div className="flex flex-col items-center mx-6 md:mx-36">
          <h2
            className={`${styles.heading2} sm:max-w-[450px] text-white text-center`}
          >
            Take Your Brand To The Next Level
          </h2>
          <p className={`${styles.heading2} xs:pt-4  text-white py-2 xs:py-6`}>
            We Offer:
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className={`${layout.sectionImg} flex-col`}>
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
            <div className="flex justify-center items-center">
              <a href="/services#get-started">
                <button className={`${styles.button} btn3 mt-8`}>
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deeds;
