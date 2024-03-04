import React from "react";
import Hero from "../CONTACT/components/Hero";
import styles from "../REUSED/constants/style";
import ContactSection from "../CONTACT/components/ContactSection";
import CTA from "../CONTACT/components/CTA";
const Contact = () => {
  return (
    <div className="roboto w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <ContactSection />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Contact;
