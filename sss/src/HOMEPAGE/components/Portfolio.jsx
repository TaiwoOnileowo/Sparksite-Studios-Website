import React from "react";
import { portfolio } from "../../REUSED/constants";
import styles from "../../REUSED/constants/style";

const PortfolioCard = ({ project: { title, imageSrc, description, demo } }) => {
  return (
    <div className="flex flex-col rounded-[10px] py-[15px] px-[20px] max-w-[300px] md:max-w-[345px] portfolio-card cursor-pointer">
      <img src={imageSrc} alt={` Image of ${title}`} />
      <h3 className="text-[25px] font-semibold my-2 text-[#d9d9d9]">{title}</h3>
      <p
        className={`font-medium roboto md:leading-[35.8px] xs:leading-[35.8px] xs:pt-4 text-[16px] xs:text-[22px]`}
      >
        {" "}
        {description}
      </p>
      <div className="w-[100%] mt-[25px] flex justify-around">
        <a
          href={demo}
          className="text-[white] text-[25px] py-[5px] font-normal rounded-[100px] px-[20px]
        demo"
        >
          Demo
        </a>
      </div>
    </div>
  );
};
const Portfolio = () => {
  return (
    <section id="projects" className="mt-[75px] text-white color-2 py-12">
      <h2 className={`${styles.heading2} text-center px-4 md:px-0`}>
         Our Works
      </h2>
      <div className="mt-[35px] flex flex-row items-center gap-[25px] px-4 ss:px-0 flex-wrap md:g-[25px] justify-center w-[100%]">
        {portfolio.map((project, id) => {
          return <PortfolioCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
