import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../REUSED/constants/style";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yo3wc8u",
        "template_pj3yxyd",
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
      className="flex flex-col ss:mt-11 text-[16px] pl-0 md:pl-0 sm:pl-20"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col md:px-0 items-center">
        <div className="flex flex-col w-[200px] xs:w-[250px] ss:w-[350px] sm:w-[700px] md:w-[735px] md:px-12">
          <div className="flex flex-col md:pr-4">
            <label
              className={`label leading-[40.8px] md:leading-[48.8px] text-[25px] xs:text-[25px] ss:text-[38px] md:text-[42px] text-[#00a1fe] py-4 text-left`}
            >
              Email
            </label>
            <input
              className="input h-[50px] w-[200px] xs:w-[250px] ss:w-[350px] sm:w-[600px] md:w-[650px]"
              type="text"
              name="organization_email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`label xs:leading-[40.8px] md:leading-[48.8px] text-[25px] xs:text-[25px] ss:text-[38px] md:text-[42px] text-[#00a1fe] py-4 text-left`}
            >
              Name Of Organization
            </label>
            <input
              className="input h-[50px] w-[200px] xs:w-[250px] ss:w-[350px] sm:w-[600px] md:w-[650px]"
              type="e-mail"
              name="organization_name"
              required
            />
          </div>

          <label
            className={`label leading-[40.8px] md:leading-[48.8px] text-[25px] xs:text-[25px] ss:text-[38px] md:text-[42px] text-[#00a1fe] py-4 text-left`}
          >
            Address
          </label>
          <input
            className="textarea h-[80px] w-[200px] xs:w-[250px] ss:w-[350px] md:w-[650px] sm:w-[600px]"
            type="text"
            name="address"
            required
          />
          <label
            className={`label leading-[40.8px] md:leading-[48.8px] text-[25px] xs:text-[25px] ss:text-[38px] md:text-[42px] text-[#00a1fe] py-4 text-left`}
          >
            Enter Your Message
          </label>
          <textarea
            className="textarea h-[150px] w-[200px] xs:w-[250px] sm:w-[600px] ss:w-[350px] md:w-[650px]"
            name="message"
          />
          <input
            className={`btn4 py-[10px] ss:py-[15px] my-8 ss:my-12 md:my-12 px-[30px] sm:w-[600px] bg-[#5c0a80] w-[200px] xs:w-[250px] ss:w-[350px] md:w-[650px] cursor-pointer font-medium text-[24px] text-[#FDFDFD] outline-none rounded-full`}
            type="submit"
            value="Send"
          />
        </div>
      </div>
    </form>
  );
}

const ContactSection = () => {
  return (
    <section className="color-2">
      <div className="flex md:flex-row-reverse flex-col">
        <div className="flex w-full items-center justify-center sm:w-[500px] md:w-full sm:ml-36 md:ml-0 pt-10 ss:pt-16 px-4 md:pl-4 md:pr-4 md:pt-64">
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_15/dpr_auto/dp25l4yax7llybc9mn7y.jpg"
            className="w-full md:h-[500px] max-w-[400px] md:max-w-[600px]"
            alt="Laptop with Website Image"
          />
        </div>
        <div className="flex flex-col md:w-[800px] ss:p-6">
          <h1 className={`${styles.heading2} text-center text-[#00a1fe]`}>
            Drop Us A line!
          </h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
