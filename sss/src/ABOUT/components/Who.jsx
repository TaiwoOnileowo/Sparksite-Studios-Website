import React from 'react'
import { layout } from '../../style'
import styles from '../../style'
import sparksites from "../assets/sparksites.png"
const Who = () => {
  return (
   <section id="who" className='flex md:flex-row flex-col bg-[#F8F8F9]'>
    <div className='flex flex-col md:flex-row justify-center md:justify-normal md:items-stretch items-center'>
     <div className={`flex justify-center mr-0 md:mt-0 md:pl-[60px] md:pr-14 w-full md:max-w-[750px] md:max-h-[600px] md:pt-16`}>
       <img src={sparksites} alt="sparksites studio" className='w-[100%]'/>
     </div>
     <div className={`${layout.sectionInfo} md:pr-16 pt-16 md:pt-24 justify-center flex px-4 flex-col md:justify-normal sm:max-w-[620px] max-w-[400px] md:max-w-[780px]`}>
       <h3 className={`${styles.heading2} text-left`}>Who Are We? </h3>
       <p className="font-normal text-[24px] WorkSans my-6 leading-9">
       We are Sparksites Studios, a digital organization formed to  create  visually stunning web interfaces , we exploit all technologies involved in web design.
       With a team of seasoned professionals, each projects is transformed into a digital master piece. From frontend finesse to robust backend solutions, our expertise spans the entire spectrum of digital craftmanship. 
       We build web solutions for companies, businesses and startups.
       </p>
     </div>
    </div>
   </section>
  )
}

export default Who