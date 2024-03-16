import React, { useState, useEffect, useRef} from "react";
import { carousel, buttonLinks } from "../../REUSED/constants";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import styles from "../../REUSED/constants/style";

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
      <div className="aspect-w-16 pt-[75px] xs:pt-[105px] ss:pt-0 aspect-h-9">
        <img
          src={carousel[currentIndex].image}
          alt="carousel image"
          className="w-[100%] h-[220px] xs:h-[300px] ss:h-[450px] md:h-[600px]"
        />
      </div>
      <div
        className="absolute top-[62%] ss:top-2/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%] md:-translate-y-[50%] text-center justify-center items-center w-[80%] max-w-xl"
        onLoad={handleImageLoad}
      >
        <h2
          className={`${
            currentIndex === 1 ? "text-[#030000]" : " text-white"
          } font-semibold ${styles.heading2} mt-[35px] xs:mt-[30px]`}
        >
          {carousel[currentIndex].heading}
        </h2>
        <p
          className={`${
            currentIndex === 1 ? "text-[#030000]" : " text-white"
          } font-semibold ${currentIndex === 2 ? "hidden md:block" : ""} ${
            styles.heading3
          } mt-2`}
        >
          {carousel[currentIndex].subHeading}
        </p>
        {carousel[currentIndex].extraText && (
          <p className={`${styles.heading3} text-white`}>
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
          <button className={`${styles.button} btn3 mt-4 xs:mt-8`}>
            {carousel[currentIndex].btnText}
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
