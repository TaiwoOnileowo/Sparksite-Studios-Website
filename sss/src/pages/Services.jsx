import React from 'react'
import Hero from '../SERVICES/components/Hero'
import styles from '../style'
import Ourservices from '../SERVICES/components/Ourservices'
import Transform from '../SERVICES/components/transform'
import Choose from '../SERVICES/components/Choose'
import GetStarted from '../SERVICES/components/GetStarted'
import Reviews from '../SERVICES/components/Reviews'
import CTA from '../SERVICES/components/CTA'
import Navbar from '../SERVICES/components/Navbar'
import Modal from '../SERVICES/components/Modal'


const services = () => {
  return (
    <div className="roboto w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      <Modal/>
      <Hero/>
      <Ourservices/>
       <Transform/>
       <Choose/>
       <GetStarted/>
       <Reviews/>
       <CTA/>
      </div>
    </div>
    </div>
  )
}

export default services