import React, { useState, useRef, useEffect } from "react";
import deeds from "../assets/deeds.jpg";
import styles, { layout } from "../../style";
import { services } from "../constants";

const ServiceCard = ({ icon, title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null); const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
    <div className={`${isVisible ? "show" : ""}`}>
      <div
        className={` flex flex-row px-32 md:p-6 rounded-[20px] ${
          index !== services.length - 1 ? "mb-6" : "mb-0"
        } deed `}
        ref={contentRef}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimPurple ${isVisible ? "show" : ""}`}
        >
          <img
            src={icon}
            alt="star"
            className="w-[50%] h-[50%] object-contain content"
          />
        </div>
        <div className={`flex-1 flex flex-col ml-3 ${isVisible ? "show" : ""}`}>
          <h4 className="font-roboto font-semibold text-white text-[22px] leading-[23.4px] mb-1 content">
            {title}
          </h4>
          <p className="font-roboto font-normal text-dimWhite text-[20px] leading-[24px] content1">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Deeds = () => {
  return (
    <section className=" w-full py-16 px-2 md:px-4 bg-[#2d2d78]">
      <div className="justify-center flex flex-col items-center">
        <h2 className={`${styles.heading2} text-white`}>What We Do</h2>
        <p className={`${styles.paragraph} text-white text-center`}>
          We Aim At Elevating Your Brand's Online Presence
        </p>
        <div>
          <img
            src={deeds}
            className="max-w-[1280px] lg:max-h-[600px] sm:max-h-[400px] max-h-[200px] mx-auto my-4 rounded-[10px]"
            alt="Laptop image"
          />
        </div>

        <h2
          className={`${styles.paragraph} text-[44px] text-white text-center py-6`}
        >
          We Build
        </h2>
        <div className="flex justify-center items-center">
          <div className={`${layout.sectionImg} flex-col`}>
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
            <a href="/services#get-started" className="link ml-[180px]">
              <span className={`span`}>Get Started</span>
              <div className="liquid"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deeds;
