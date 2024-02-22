import React from 'react'
import { layout } from '../../style'
import styles from '../../style'
import transform from "../assets/transform.png"
const Transform = () => {
  return (
    <section id='product' className={`flex md:flex-row flex-col`}>
      <div className='flex flex-col md:flex-row justify-center md:justify-normal md:items-stretch items-center'>
      <div className={`flex justify-center mr-0 md:mt-0 md:pl-[60px] md:pr-14 w-full md:max-w-[750px] sm:h-[400px] h-[250px] md:h-[550px] md:pt-32`}>
        <img src={transform} alt="transform business image" className='w-[100%]' />
      </div>
     <div className={`${layout.sectionInfo} md:pr-16 pt-16 md:pt-[125px] justify-center items-center flex px-4 flex-col md:justify-normal sm:max-w-[620px] max-w-[400px] md:max-w-[750px]`}>
     <h3 className={styles.heading3}>Transforming Businesses <br className='sm:block hidden'/>Through Cutting-Edge Technology Solutions</h3>
     <p className="font-normal text-[24px] WorkSans my-6 leading-9">
     Embark on a transformative journey with Sparksites Studios, where we redefine the future of your business through cutting-edge technology solutions. 
     Our innovative approach leverages the latest advancements to propel your enterprise into new realms of efficiency, engagement, and success. 
      </p>
     </div>
     </div>
    </section>
  )
}

export default Transform