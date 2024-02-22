import React from 'react'
import { feedback } from '../constants'
import styles from '../../style'
import quotes from "../assets/quotes.svg"

const FeedbackCard = ({content, name, title, img}) => 
   (
    <div className='flex md:justify-between flex-row flex-wrap md:flex-col px-10 py-12 rounded-[20px] max-w-[300px] md:max-w-[345px] md:mr-10 sm:mr-5 mr-0 my-5 review-card'>
      <img src={quotes} alt="double_quotes" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-roboto font-normal md:text-[18px] text-[22px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-robotoo font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-roboto font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )



const Reviews = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col bg-[#2d2d78]`}>
      <h2 className={`${styles.heading2} text-white`}>Our Reviews</h2>
    <div className='flex flex-wrap w-full justify-center items-center review-container relative z-[1]'>
        {feedback.map((card, index)=>(
         <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
      </section>
  )
}

export default Reviews