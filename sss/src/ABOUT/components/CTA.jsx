import React from 'react'
import styles from '../../style'
const CTA = () => {
  return (
    <section>
        
        <div className='bg-align bg-cover h-[350px] md:h-[350px] bg-center md:bg-fixed' >
            <div className='flex flex-col py-6 sm:py-14 md:py-12 px-4 md:px-16 max-w-[600px]'>
            <h1 className={`${styles.heading2} text-white`}>We Create <span className='text-[#8a2be2] text-[55px] '>Websites</span>  that <span className='text-[#8a2be2] text-[55px] '> Align</span> wtih Your Business<span className='text-[#8a2be2] text-[55px] '> Goal</span> </h1>
            <a href=""><button className={`${styles.button} btn1`}>Request A Proposal</button></a>
            </div>
        </div>
        
    </section>
  )
}

export default CTA