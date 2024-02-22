import React from "react";
import contact from "../assets/contact.png"
import styles from "../../style";



const Hero = () => {
  return (
    
    <section className='mt-[150px]'>
        <h1 className={`${styles.heading2} text-center`}>Connect With Us</h1>
        <div className='flex md:flex-row flex-col md:p-24'>
            <div className='flex max-w-[900px] pt-8 md:pt-0'>
            <img src={contact} className='w-full h-[350px] sm:h-[400px] md:h-[500px]' alt="" />
            </div>
            <div className='flex flex-col max-w-[400px] px-8 py-8 md:py-4'>
              <div className='pb-8'>
                <h3 className={`${styles.heading3}`}>Address</h3>
                <p className='py-4 text-[18px] roboto'>5, SuiteLife Crescent, Hope Estate, Ago Palace Way, Lagos, Nigeria.</p>
              </div>
              <div className='pb-8'>
                <h3 className={`${styles.heading3}`}>Phone</h3>
                <p className='py-4 text-[18px] roboto'>09076803500</p>
              </div>
              <div className='pb-8'>
                <h3 className={`${styles.heading3}`}>Email</h3>
                <p className='py-4 text-[18px] roboto'>sparksitesofficial@gmail.com</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
