import React from 'react'
import { clients } from '../../HOMEPAGE/constants'
import styles from '../../style'
const Clients = () => {
  return (
    <section id="trusted" className={`bg-[#939ca1] mt-[-40px] flex`}>
    <div className='flex flex-row  items-center justify-center w-100%'>
      {clients.map((client)=>{
      return <div key={client.id} className='flex md:w-[400px] items-center' >
        <a href={client.link} target='/blank'><img src={client.logo} alt={client} className='img' /></a>
      </div>
      })}
    </div>
    </section>  )
}

export default Clients