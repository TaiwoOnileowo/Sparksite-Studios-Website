import React from 'react'
import { layout } from '../../style'
import styles from '../../style'
import choose from "../assets/choose.png"
const Choose = () => {
  return (
    <section className={`flex md:flex-row flex-col`}>
        <div className='flex flex-col-reverse md:flex-row justify-center md:justify-normal md:items-stretch items-center'>
      <div className={`${layout.sectionInfo}  pt-12 md:pt-44 md:pl-16 max-w-[450px] px-4 sm:max-w-[620px] md:max-w-[650px]`}>
        <h3 className="leading-[40.8px] md:leading-[48.8px] text-[34px] md:text-[42px]">Why Choose Us?</h3>
        <p className="font-normal text-[24px] WorkSans my-6 leading-9">
        Our commitment to excellence sets us apart. 
        We blend creativity with technical expertise to deliver web solutions that captivate, engage, and drive success. 
        From visionary designs to seamless functionality, we prioritize your goals. Choose us for innovation, reliability, and a partnership that goes beyond expectations. 
        </p>
        </div>
        
      
      <div className={`flex justify-center pr-[40px] pl-16 mr-0 mt-0 w-[720px] h-[320px] md:h-[550px] pt-12 md:pt-32`}>
        <img src={choose} alt="card" className='w-[100%]' />
      </div>
      </div>
    </section>
  )
}

export default Choose