import React from 'react'
import Hero from "../ABOUT/components/Hero"
import styles from '../style'
import Who from '../ABOUT/components/Who'
import Mission from '../ABOUT/components/mission'
import Services from '../ABOUT/components/Services'
import CTA from '../ABOUT/components/CTA'
import Navbar from '../ABOUT/components/Navbar'
const About = () => {
  return (
    <div className="DmSansSerif w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      <Hero/>
      <Who/>
      <Mission/>
      <Services/>
      <CTA/>
    </div>
    </div>
    </div>
  )
}

export default About