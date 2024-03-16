import React from "react";
import styles from "../constants/style";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col bg-navbar-2`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start">
        <a href="/">
          <div className="-mx-[25px] xs:-mx-[20px] sm:-mx-[40px] max-w-[700px] max-h-[120px] flex flex-row items-center">
            <img
              src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/bbbbqgjfs494kia7vlw5.jpg"
              alt="Sparksites Studio Logo"
              className="max-w-[100px] xs:max-w-[130px] sm:max-w-[160px]"
            />
            <img
              src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/wrix6smtc2bi79aeocix.jpg"
              alt="SPARKSITES STUDIOS"
              className="sm:w-[280px] w-[140px] xs:w-[170px] -ml-[30px] ss:-ml-[40px] sm:-ml-[50px] -mt-[5px]"
            />
          </div>
        </a>
        <p
          className={`${styles.paragraph} text-white uppercase  ss:max-w-[300px] sm:max-w-[350px] md:max-w-[380px]`}
        >
          Empowering Brands - One Spark At A Time
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-medium text-[20px] leading-[27px] text-white roboto">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`${
                    styles.list
                  }  text-dimWhite hover:text-[#00a1fe] ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {" "}
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#00A1FE]">
      <p className={`${styles.list} roboto text-white`}>
        <a href="/">Powered By SSS</a>
      </p>
      <p className={`${styles.list} roboto text-white`}>
        Copyright Ⓒ 2024 Sparksites Studios. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
