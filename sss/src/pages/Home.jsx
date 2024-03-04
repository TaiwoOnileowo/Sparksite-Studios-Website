import React from "react";
import styles from "../REUSED/constants/style.js";
import Carousel from "../HOMEPAGE/components/Carousel.jsx";
import Services from "../REUSED/components/Services.jsx";
import MoreDeeds from "../HOMEPAGE/components/MoreDeeds.jsx";
import Portfolio from "../HOMEPAGE/components/Portfolio.jsx";
import Reviews from "../REUSED/components/Reviews.jsx";
import CTA from "../HOMEPAGE/components/CTA.jsx";

const App = () => (
  <div className="w-full roboto overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Carousel />
      </div>
    </div>

    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
        <MoreDeeds />
        <Portfolio />
        <Reviews />
        <CTA />
      </div>
    </div>
  </div>
);

export default App;
