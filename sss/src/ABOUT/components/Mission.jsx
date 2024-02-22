import React from 'react'
import { layout } from '../../style'
import styles from '../../style'
import mission from "../assets/mission.png"
const Mission = () => {
  return (
    <section id="mission" className='flex md:flex-row flex-col bg-[#F8F8F9]'>
    <div className='flex flex-col md:flex-row-reverse justify-center md:justify-normal md:items-stretch items-center'>
     <div className={`flex justify-center items-center w-full md:ml-16 md:max-w-[550px] md:max-h-[520px] md:pt-24 `}>
       <img src={mission} alt="sparksites studio" className='w-[100%]'/>
     </div>
     <div className={`${layout.sectionInfo} justify-center flex pt-20 flex-col md:justify-normal px-6 md:px-16 sm:max-w-[620px] w-full md:max-w-[680px]`}>
       <h3 className={`${styles.heading2} text-left`}>Our Mission </h3>
       <p className="font-normal text-[24px] WorkSans my-2 leading-9">
       Our mission is clear - to elevate your brand's online presence. 
       Rooted in a commitment to excellence, we believe in the transformative power of technology. 
       Every line of code, every pixel perfected, contributes to our mission of creating web solutions that  meet expectations. 
      We are not just designers; we are creators of extraordinary digital realms. 
      Your vision, our expertise – let's create something extraordinary together. 
       </p>
     </div>
    </div>
   </section>
  )
}

export default Mission