import React from 'react'
import { layout } from '../../style'
import { buttonLinks } from '../constants'
import styles from '../../style'
import uiux from '../assets/uiux.png'
const MoreDeeds = () => {
  return (
    <section id='product' className={`flex md:flex-row flex-col`}>
      <div className='flex flex-col md:flex-row justify-center md:justify-normal md:items-stretch items-center'>
      <div className={`flex justify-center mr-0 md:mt-0 md:pl-[60px] md:pr-14 w-full md:max-w-[750px] md:max-h-[600px] md:pt-32`}>
        <img src={uiux} alt="uiux image" className='w-[100%]' />
      </div>
     <div className={`${layout.sectionInfo} md:pr-16 pt-16 md:pt-32 flex px-4 flex-col md:justify-normal sm:max-w-[650px] max-w-[400px] md:max-w-[750px]`}>
     <h2 className={`${styles.heading3} text-dark`}>Experience the Perfect Blend of Stunning Design and Seamless<br className='sm:block hidden'/> Functionality with Sparksites Studios!</h2>
     <p className="font-normal text-[24px] WorkSans my-6 leading-9">
        Elevate your user experience through our exceptional UI/UX designs, crafted to captivate and engage.
      Plus, enjoy peace of mind with our around-the-clock technical support - we're here for you, 24/7. 
      Your success is our priority!</p>
      <div className='flex flex-row flex-wrap md:mt-0 sm:mt-10'>
       <a href={buttonLinks[0].link}><button className={`${styles.button} btn1`}>Get Started</button></a>

      </div>

     </div>
     </div>
    </section>
  )
}

export default MoreDeeds