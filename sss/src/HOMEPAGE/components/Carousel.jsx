import React, { useState, useEffect, useRef } from "react";
import { carousel } from "../../REUSED/constants";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import styles from "../../REUSED/constants/style";

let count = 0;
let slideInterval;
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState("");
  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    // slideRef.current.addEventListener("animationend", removeAnimation);

    startSlider();

    return () => {
      pauseSlider();
      slideRef.current.removeEventListener("animationend", removeAnimation);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 8000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);

  };

  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    // slideRef.current.querySelector("img").classList.add("fade-anim");
    // setFade("fade-anim")
  };

  const handleOnPrevClick = () => {
    count = (currentIndex - 1 + carousel.length) % carousel.length;
    setCurrentIndex(count);
    // slideRef.current.querySelector("img").classList.add("fade-anim");
  };

  const handleImageLoad = () => {
    removeAnimation();
  };

  return (
    <section ref={slideRef} className="w-full select-none relative">
      <div
        className=""
        onMouseEnter={pauseSlider}
        onMouseLeave={startSlider}
      >
        <img
          src={carousel[currentIndex].image}
          alt="carousel image"
          className="w-[100%] h-[220px] xs:h-[300px] ss:h-[450px] md:h-[550px]"
        />
      </div>
      <div
        className="absolute top-[62%] ss:top-[25%] left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center"
        onLoad={handleImageLoad}
      >
        <h2
          className={`text-white
          font-bold ${styles.heading2} mt-[35px] w-[350px] sm:w-full xs:mt-0 uppercase`}
        >
          {carousel[currentIndex].heading}
        </h2>
        <p
          className={` text-white
           font-[600] w-[300px] sm:w-[400px] ${styles.heading3} mt-[10px] uppercase`}
        >
          {carousel[currentIndex].subHeading}
        </p>
        <a href="/services#getstarted">
          <button className={`${styles.button} btn3 mt-4 xs:mt-12`}>
            Get Started
          </button>
        </a>
      </div>
      <div className="absolute w-full xs:top-1/2 top-[68%] transform -translate-y-[10px] xs:-translate-y-[40%] px-3 flex justify-between items-center">
        <button
          className="bg-black hidden xs:block text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <IoIosArrowDropleft size={26} />
        </button>
        <button
          className="bg-black block xs:hidden text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <IoIosArrowDropleft size={20} />
        </button>
        <button
          className="bg-black hidden xs:block text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <IoIosArrowDropright size={26} />
        </button>
        <button
          className="bg-black block xs:hidden text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <IoIosArrowDropright size={20} />
        </button>
      </div>
    </section>
  );
}
export default Carousel;
