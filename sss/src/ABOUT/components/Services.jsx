import React, { useState, useRef, useEffect } from "react";
import { services } from "../../HOMEPAGE/constants";
import styles from "../../style";
import { layout } from "../../style";
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
        className={`content flex w-full ss:px-4 sm:p-6 sm:pt-0 md:p-6 flex-row rounded-[20px] ${
          index !== services.length - 1 ? "mb-6" : "mb-0"
        } deed`}
        ref={contentRef}
      >
        <div
          className={`w-[45px] h-[45px] xs:w-[50px] xs:h-[50px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-white`}
        >
          <img
            src={icon}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-semibold text-white text-[16px] xs:text-[18px] sm:text-[22px] leading-[23.4px] mb-1 roboto">
            {title}
          </h4>
          <p className=" font-normal text-dimWhite text-[14px] xs:text-[18px] sm:text-[20px] leading-[24px] roboto">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full py-8 xs:py-16 px-2 md:px-4 bg-[#2d2d78]">
      <div className="justify-center flex flex-col items-center">
        <div className="flex flex-col max-w-[600px]">
          <h2 className={`${styles.heading2} text-white text-center md:pb-6`}>
            Our Services
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <div className={`${layout.sectionImg} flex-col`}>
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
            
            <div className="flex justify-center items-center">
              <a href="/services#get-started">
                <button
                  className={`${styles.button} btn3 mt-8 text-white rounded-full`}
                >
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

export default Services;
