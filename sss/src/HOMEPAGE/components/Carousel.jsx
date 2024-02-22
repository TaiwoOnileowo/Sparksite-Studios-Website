import React, { useState, useEffect, useRef } from "react";
import { carousel, buttonLinks } from "../constants";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import styles from "../../style";

let count = 0;
let slideInterval;
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();

    return () => {
      pauseSlider();
      slideRef.current.removeEventListener("animationend", removeAnimation);
      slideRef.current.removeEventListener("mouseenter", pauseSlider);
      slideRef.current.removeEventListener("mouseleave", startSlider);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    slideRef.current.querySelector("img").classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const carouselLength = carousel.length;
    count = (currentIndex - 1 + carouselLength) % carouselLength;
    setCurrentIndex(count);
    slideRef.current.querySelector("img").classList.add("fade-anim");
  };

  const handleImageLoad = () => {
    removeAnimation();
  };

  return (
    <section ref={slideRef} className="w-full select-none relative ">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={carousel[currentIndex].image}
          alt="carousel image"
          className="w-[100%] h-[450px] md:h-[600px] -z-10"
        />
      </div>
      <div
        className="absolute top-2/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] md:-translate-y-[50%] text-center justify-center items-center w-[80%] max-w-xl"
        onLoad={handleImageLoad}
      >
        <h2
          className={`${
            currentIndex === 1 ? "text-[#00A1FE]" : " text-white"
          } font-semibold ${styles.heading2} mt-[30px]`}
        >
          {carousel[currentIndex].heading}
        </h2>
        <p
          className={`${
            currentIndex === 1 ? "text-[#00A1FE]" : " text-white"
          }   ${currentIndex === 2 ? "hidden md:block" : ""} text-[24px] ${
            styles.paragraph
          }`}
        >
          {carousel[currentIndex].subHeading}
        </p>
        {carousel[currentIndex].extraText && (
          <p className={`${styles.paragraph} text-[24px] text-white`}>
            {carousel[currentIndex].extraText}{" "}
          </p>
        )}
        <a
          href={
            currentIndex === 1
              ? `${buttonLinks[1].link}`
              : `${buttonLinks[0].link}`
          }
        >
          <button
            className={`btn1 text-white py-4 my-4 md:my-[20px] px-[30px] bg-[#A020F0] font-roboto font-medium text-[18px] outline-none rounded-[10px]`}
          >
            {carousel[currentIndex].btnText}
          </button>
        </a>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <IoIosArrowDropleft size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <IoIosArrowDropright size={30} />
        </button>
      </div>
    </section>
  );
}
export default Carousel;
