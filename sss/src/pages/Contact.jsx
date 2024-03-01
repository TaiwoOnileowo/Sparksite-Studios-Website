import React from 'react'
import Hero from '../CONTACT/components/Hero'
import styles from '../style'
import Navbar from '../CONTACT/components/Navbar'
import ContactSection from '../CONTACT/components/ContactSection'
import CTA from '../CONTACT/components/CTA'
const Contact = () => {
  return (
    <div className="roboto w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      <Hero/>
      <ContactSection/>
      <CTA/>
    </div>
    </div>
    </div>
  )
}

export default Contact
