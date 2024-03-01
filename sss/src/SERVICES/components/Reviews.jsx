import React from 'react'
import styles from '../../style'
import { feedback } from '../../HOMEPAGE/constants'
import quotes from "../assets/quotes.svg"
import Clients from "../components/Clients"

const FeedbackCard = ({content, name, title, img}) => 
   (
    <div className='flex md:justify-between flex-row flex-wrap md:flex-col px-10 py-8 rounded-[20px] max-w-[300px] md:max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-[#3498db]'>
      <img src={quotes} alt="double_quotes" className='w-[42px]  h-[27px] object-contain' loading="lazy"/>
      <p className='font-normal text-[18px] leading-[32px] text-white my-10 WorkSans'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' loading="lazy"/>
        <div className='flex flex-col ml-4'>
          <h4 className= 'font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-normal text-[16px] leading-[24px] text-white'>{title}</p>
        </div>
      </div>
    </div>
  )

const Reviews = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative bg-[#939ca1] roboto`}>
    <h2 className={`${styles.heading2} text-[#2d2d38] DmSansSerif px-5 text-center`}>Trusted by Companies</h2>
  <div className={`flex flex-wrap w-full justify-center items-center review-container ${styles.paddingX} relative z-[1]`}>
      {feedback.map((card, index)=>(
       <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
       <Clients/>
    </section>
  )
}

export default Reviews