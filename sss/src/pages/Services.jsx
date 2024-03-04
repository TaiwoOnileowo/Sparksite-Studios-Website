import React from "react";
import Hero from "../SERVICES/components/Hero";
import styles from "../REUSED/constants/style";
import Transform from "../SERVICES/components/Transform";
import Choose from "../SERVICES/components/Choose";
import GetStarted from "../SERVICES/components/GetStarted";
import CTA from "../SERVICES/components/CTA";
import Modal from "../SERVICES/components/Modal";
import Services from "../REUSED/components/Services";
import Reviews from "../REUSED/components/Reviews";
const services = () => {
  return (
    <div className="roboto w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Modal />
          <Hero />
          <Services />
          <Transform />
          <Choose />
          <GetStarted />
          <Reviews />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default services;
