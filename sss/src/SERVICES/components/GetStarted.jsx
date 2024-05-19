import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../REUSED/constants/style";
// import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  // const [state, handleSubmit] = useForm("mqkreywq");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yo3wc8u",
        "template_em583kn",
        form.current,
        "YdAoRX8W6yCSRhU2R"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full mt-11 text-[16px]"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col px-16 ss:px-8 sm:px-0">
        <label className={`label ${styles.heading3} text-[#00a1fe] py-2 ss:py-4`}>
          Name Of Organization
        </label>
        <input
          className="input h-[35px] xs:h-[50px] w-[200px] xs:w-[250px] ss:w-[350px] ts:w-[500px] sm:w-[650px] md:w-[700px]"
          type="text"
          name="organization_name"
          required
        />
        <div className="flex items-center justify-center flex-col ts:flex-row w-full ss:mt-4">
          <div className="ts:mr-2 flex flex-col">
            <label className={`label${styles.heading3} text-[#00a1fe] py-2 ss:py-4`}>
              Phone Number
            </label>
            <input
              className="input h-[35px] xs:h-[50px] w-[200px] xs:w-[250px] sm:w-[320px] ts:w-[240px] ss:w-[350px] md:w-[340px]"
              type="text"
              name="organization_email"
              autoComplete="number"
              required
            />
          </div>
          <div className="ts:ml-2 flex flex-col">
            <label className={`label${styles.heading3} text-[#00a1fe] py-2 ss:py-4`}>
              Preferred Email
            </label>
            <input
              className="input h-[35px] xs:h-[50px] w-[200px] xs:w-[250px] sm:w-[320px] ts:w-[240px] ss:w-[350px] md:w-[340px]"
              type="e-mail"
              name="organization_email"
              required
            />
          </div>
        </div>

        <input
          className={`input ${styles.button} h-[35px] xs:h-[50px] flex items-center justify-center btn4 w-[200px] xs:w-[250px] ts:w-[500px] sm:w-[650px] ss:w-[350px] md:w-[700px]`}
          type="submit"
          value="Send"
        />
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
    <section
      id="get-started"
      className={`${styles.paddingY} mt-12 md:mt-32 ${styles.flexCenter} flex-col color-2`}
    >
      <div className="flex justify-center flex-col pt-8 px-2 ss:px-0">
        <h2 className={`${styles.heading2} text-center text-white`}>
          Get The Ball Rolling!
        </h2>
        <p className={`${styles.paragraph} xs:pt-4 text-center text-white`}>
          Input Your E-mail and Phone Number
        </p>
        <h3 className={`${styles.heading2} text-center text-white`}>
          It's as Easy as That!
        </h3>
      </div>
      <div className="">
        <ContactForm />
      </div>
    </section>
  );
};

export default GetStarted;
