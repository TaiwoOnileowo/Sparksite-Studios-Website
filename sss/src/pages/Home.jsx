import React from "react";
import styles from "../style.js";
import Navbar from "../HOMEPAGE/components/Navbar.jsx";
import Carousel from "../HOMEPAGE/components/Carousel.jsx";
import Deeds from "../HOMEPAGE/components/Deeds.jsx";
import MoreDeeds from "../HOMEPAGE/components/MoreDeeds.jsx";
import Portfolio from "../HOMEPAGE/components/Portfolio.jsx";
import Reviews from "../HOMEPAGE/components/Reviews.jsx";
import CTA from "../HOMEPAGE/components/CTA.jsx";

const App = () => (
  <div className="w-full roboto overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Carousel/>
      </div>
    </div>
    
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Deeds/>
        <MoreDeeds/>
        <Portfolio/>
        <Reviews/>
        <CTA/>
      </div>
    </div>
  </div>
);

export default App;