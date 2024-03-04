import React from "react";
import Hero from "../ABOUT/components/Hero";
import styles from "../REUSED/constants/style";
import Who from "../ABOUT/components/Who";
import Mission from "../ABOUT/components/Mission";
import Services from "../ABOUT/components/Services";
import CTA from "../ABOUT/components/CTA";
import CoreValues from "../ABOUT/components/CoreValues";
const About = () => {
  return (
    <div className="roboto w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Who />
          <Mission />
          <CoreValues />
          <Services />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default About;
