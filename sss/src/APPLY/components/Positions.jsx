import React from 'react'
import { layout } from '../../style';
import styles from '../../style';
import { positions } from '../../HOMEPAGE/constants';


const PositionCard = ({ icon, position,description, index }) => (
  <div className={`flex flex-row p-2 rounded-[20px] feature-card`}>
    
    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div> */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {position}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {description}
      </p>
    </div>
  </div>
);


const Positions = () => {
  return (
    
    <section id="features" className={layout.section}>
      <div className='flex flex-row rounded-[30px] bg-[#306693] p-[20px] font-roboto'>
      <div className="flex-1 justify-center flex-col max-w-[700px] p-8">
        <h2 className={`${styles.heading2} text-white`}>
        Join Sparksites Studios:<br className="sm:block hidden" /> We're Building a Team of Visionaries
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5 text-white`}>
          At Sparksites Studios, we believe in the power of collaboration and innovation. 
          We are on the lookout for dynamic and experienced individuals to join our team and contribute to the exciting journey of transforming digital landscapes.
            Here's what we are looking for:
        </p>
        <ul className='list-disc list-inside mt-4 text-dimWhite'>
            <li className='mt-2'><span className={`text-[#F5FFFA] text-[18px] font-semibold`}>Experienced Professionals:</span> We value expertise and experience.
              If you've proven a track record in the skills listed , we want to hear from you.
              You're skills could be the missing piece in our creative puzzle.
            </li>
            <li className={`text-[#F5FFFA] text-[18px] font-semibold mt-2`}>Must be Nigerian</li>
            <li className='mt-2'><span className={`text-[#F5FFFA] text-[18px] font-semibold`}>Cooperative team players:</span> Must be able to thrive well in a team</li>
            <li className='mt-2'><span className={`text-[#F5FFFA] text-[18px] font-semibold`}>Passionate innovators:</span> If you're passionate about pushing innovating creating ideas, you'll find a home here.</li>
            <li className='mt-2'><span className={`text-[#F5FFFA] text-[18px] font-semibold`}>Adaptable and Growth-oriented:</span> We seek individuals eager to learn, grow, and embrace new challenges.</li>
        </ul>
      </div>
  
      <div className={`flex-[1] flex md:ml-10 ml-0 md:mt-0 mt-10 flex-col`}>
      <h1 className={`${styles.heading2} text-white ml-4 my-8`}>AVAILABLE ROLES</h1>
        {positions.map((position, index) => (
          <PositionCard key={position.id} {...position} index={index} />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Positions