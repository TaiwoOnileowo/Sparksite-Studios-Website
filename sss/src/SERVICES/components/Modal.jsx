import React, { useState, useEffect } from "react";
import { Modalservices } from "../../REUSED/constants";
import close from "../../REUSED/assets/close.svg";
import styles from "../../REUSED/constants/style";
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigateToId = (id) => {
    window.location.href = `/services#${id}`;
    closeModal();
  };

  return (
    <div className={`${isOpen ? "flex" : "hidden"} overlay`}>
      <div className="flex flex-row modal-container px-2 py-4 rounded-[20px] max-w-[200px] xs:max-w-[270px] ss:max-w-[380px] sm:max-w-[500px] md:max-w-[600px] md:top-[50%] top-[40%] left-[50%]">
        <div className="md:max-w-[250px] sm:max-w-[200px] max-w-[180px] flex flex-col pt-2 mr-2 items-center">
          <h3 className="font-medium font-roboto md:leading-[50.8px] leading-[35.8px] md:text-[22px] sm:text-[20px] text-[14px] xs:text-[16px] text-white rounded-full bg-[#00bfff83] px-2 sm:px-4">
            <span className="xs:flex hidden">
              Limited <span className="hidden ss:block px-1"> Time </span> Offer
            </span>
          </h3>
          <img
            src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_50/dpr_auto/bbbbqgjfs494kia7vlw5.jpg"
            alt="sparksites logo"
            className="sm:pt-12 md:pt-0 pt-0"
          />
          <div className="absolute z-[0] w-[20%] h-[20%] top-[80%] left-[2%] rounded-full blue__gradient" />
          <div className="absolute z-[0] w-[20%] h-[20%] top-[1%] right-[2%] rounded-full blue__gradient" />
        </div>
        <div>
          <img
            src={close}
            alt=""
            className="absolute right-[2%] top-[2%] w-[15px] md:w-[20px] h-[28px] object-contain z-[100] cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className=" md:max-w-[300px] md:ml-8 ss:mr-2 sm:mr-0 flex flex-col">
          <h1 className={`${styles.heading3} text-white`}>
            Get <span className="text-[#00BFFF]">20% OFF</span> All Services.
          </h1>
          <p className={`${styles.heading3} sm:block hidden  text-white`}>
            We Offer:
          </p>
          <div>
            {Modalservices.map((modalservice) => (
              <ul className="w-full hidden ss:block" key={modalservice.id}>
                <li className="font-medium text-white md:text-[19px] sm:text-[18px] xs:text-[14px] ss:text-[16px]">
                  {modalservice.service}
                </li>
              </ul>
            ))}
            <button
              className={`${styles.button} btn3 mt-4`}
              onClick={() => navigateToId("get-started")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
