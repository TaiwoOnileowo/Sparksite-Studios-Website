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
        className={`flex flex-row px-32 md:p-6 rounded-[20px] ${
          index !== services.length - 1 ? "mb-6" : "mb-0"
        } deed content`}
        ref={contentRef}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-white`}
        >
          <img
            src={icon}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
        <div className=" flex-1 flex flex-col ml-3">
          <h4 className="font-semibold text-white text-[22px] leading-[23.4px] mb-1">
            {title}
          </h4>
          <p className=" font-normal text-dimWhite text-[20px] leading-[24px] WorkSans">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Ourservices = () => {
  return (
    <section className=" w-full py-16 px-2 md:px-4 bg-[#2d2d38]">
      <div className="justify-center flex flex-col items-center">
        <div className="flex flex-col max-w-[600px]">
          <h2 className={`${styles.heading2} text-white text-center pb-8`}>
            Our Services
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <div className={`${layout.sectionImg} flex-col`}>
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
            <a href="#get-started" className="link ml-[180px]">
              <span className={`span`}>Get Started</span>
              <div className="liquid"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
