import React from "react";
import styles from "../../style";
import { feedback } from "../../HOMEPAGE/constants";
import quotes from "../assets/quotes.svg";
import Clients from "../components/Clients";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex md:justify-between flex-row flex-wrap md:flex-col px-6 py-6 xs:py-12 rounded-[20px] max-w-[250px] xs:max-w-[300px] md:max-w-[345px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-[#3498db]">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[30px] h-[20px] xs:w-[42px] xs:h-[27px] object-contain"
      
    />
    <p className="roboto font-normal md:text-[18px] text-[16px] xs:text-[22px] leading-[25px] xs:leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img
        src={img}
        alt={name}
        className="xs:w-[48px] xs:h-[48px] w-[40px] h-[40px] rounded-full"
      />
      <div className="flex flex-col ml-4">
        <h4 className="roboto font-semibold text-[16px] xs:text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="roboto font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative color-2 roboto`}
    >
      <h2
        className={`${styles.heading2} ss:max-w-[300px] md:max-w-[500px] text-white text-center`}
      >
        Trusted by Companies
      </h2>
      <div
        className={`flex flex-wrap w-full justify-center items-center review-container px-2 relative z-[1]`}
      >
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      <Clients />
    </section>
  );
};

export default Reviews;
