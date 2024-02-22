import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../style'
// import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    // const [state, handleSubmit] = useForm("mqkreywq");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yo3wc8u', 'template_em583kn', form.current, 'YdAoRX8W6yCSRhU2R')
      .then((result) => {
          e.target.reset();
          console.log('sent')
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <form className="flex flex-col items-center w-full mt-11 text-[16px]" ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col px-8 md:px-0'>
      <label className={`label ${styles.heading3} text-[#4fa3ff] py-4 text-left`}>Name Of Organization</label>
      <input className='input h-[50px]  md:w-[800px]' type="text" name="organization_name" required/>
      <label className={`label ${styles.heading3} text-[#4fa3ff] py-4 text-left`}>Preferred Email</label>
      <input className='input h-[50px] md:w-[800px]' type="e-mail" name="organization_email" required/>
      <label className={`label ${styles.heading3} text-[#4fa3ff] py-4 text-left`}>Which Service Do You Want From Us?</label>
      <input className='input h-[80px] md:w-[800px]' type="text" name="service_name" required/>
      <input className={`input ${styles.button} btn`} type="submit" value="Send" />
      </div>
    </form>
    //     <form onSubmit={handleSubmit} className=''>
    //     <label htmlFor="email">
    //       Name
    //     </label>
    //     <input
    //       id="name"
    //       type="name" 
    //       name="name"
    //     />
    //     <ValidationError 
    //       prefix="name" 
    //       field="name"
    //       errors={state.errors}
    //     />
    //     <label htmlFor="email">
    //       Email Address
    //     </label>
    //     <input
    //       id="email"
    //       type="email" 
    //       name="email"
    //     />
    //     <ValidationError 
    //       prefix="Email" 
    //       field="email"
    //       errors={state.errors}
    //     />
    //     <textarea
    //       id="message"
    //       name="message"
    //     />
    //     <ValidationError 
    //       prefix="Message" 
    //       field="message"
    //       errors={state.errors}
    //     />
    //     <button type="submit" disabled={state.submitting} className={`${styles.button}`}>
    //       Submit
    //     </button>
    //   </form>
    );
  }

const GetStarted = () => {
  return (
    <section id="get-started" className={`${styles.paddingY} mt-12 md:mt-32 ${styles.flexCenter} flex-col bg-slate-600`}>
        <div className='flex justify-center flex-col pt-8'>
            <h2 className={`${styles.heading2} text-center text-white`}>Get The Ball Rolling!</h2>
            <p className={`${styles.paragraph} text-center text-white`}>Give Us Your E-mail and Service You Want Us To Offer</p>
            <p className={`font-medium md:leading-[50.8px] leading-[35.8px] text-[24px] text-center text-white`}>We Send a Proposal.</p>
            <h3 className={`${styles.heading3} text-center text-white`}>It's as Easy as That!</h3>
        </div>
        <div className='flex'>
            <ContactForm/>
        </div>
    </section>
  )
}

export default GetStarted