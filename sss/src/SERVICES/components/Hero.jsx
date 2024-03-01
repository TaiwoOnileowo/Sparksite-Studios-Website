import React from 'react'
import { layout } from '../../style'
import styles from '../../style'
import elevate from "../assets/elevate.png"
const Hero = () => {
  return (
    <section id='product' className={`flex md:flex-row bg-[#F8F8F9] justify-center sm:max-h-[400px]  md:max-h-[600px] w-full sm:mt-[100px] mt-[200px] md:mt-[100px] pt-12 md:mb-8 md:mr-2`}>
      <div className='flex md:flex-row sm:flex-row flex-col-reverse mt-0 h-[500px]'>
     <div className={`${layout.sectionInfo} pt-[30px] px-8 max-w-[680px]`}>
     <h1 className={`${styles.heading1} text-black font-medium`}>Elevate Your Brand's Online Presence with<br className='sm:block hidden'/> Sparksites Studios</h1>
      <div className='flex flex-row flex-wrap sm:mt-10'>
       <button className={`${styles.button} btn1`}>Request A Proposal</button>
      </div>
     </div>
     <div className={`justify-center items-start flex md:max-w-[720px] w-full sm:max-w-[400px]`}>
        <img src={elevate} alt="Elevate Your Brand Image" className='h-[400px] sm:h-[300px] md:h-[500px] w-full' loading="lazy"/>
      </div>
      </div>
    </section>
  )
}

export default Hero