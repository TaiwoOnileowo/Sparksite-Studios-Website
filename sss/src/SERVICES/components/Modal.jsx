import React, { useState, useEffect } from "react";
import sparksites from "../assets/sparksites.png";
import { Modalservices } from "../../HOMEPAGE/constants";
import close from "../../HOMEPAGE/assets/close.svg";
import styles from "../../style";

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
      <div className="flex flex-row modal-container px-2 py-4 rounded-[20px] max-w-[300px] sm:max-w-[500px] md:max-w-[600px] md:top-[50%] top-[40%] left-[50%]">
        <div className="md:max-w-[250px] sm:max-w-[200px] max-w-[150px] flex flex-col pt-2 items-center">
          <h3 className="font-medium font-roboto md:leading-[50.8px] leading-[35.8px] md:text-[22px] sm:text-[20px] text-[16px] text-white rounded-full bg-[#00bfff83] px-2 sm:px-4">
            Limited Time Offer
          </h3>
          <img
            src={sparksites}
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
            className="absolute right-[2.5%] w-[15px] md:w-[20px] h-[28px] object-contain z-[100] cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className=" md:max-w-[300px] flex flex-col">
          <h1
            className={`leading-[25.8px] sm:leading-[48.8px] text-[20px] sm:text-[42px] text-white`}
          >
            Get <span className="text-[#00BFFF]">20% OFF</span> All Services.
          </h1>
          <p className="font-medium font-roboto sm:leading-[50.8px] sm:block hidden leading-[35.8px] text-white text-[20px] sm:text-[30px]">
            We offer:
          </p>
          <div className="">
            {Modalservices.map((modalservice) => (
              <ul className="w-full sm:block hidden">
                <li
                  key={modalservice.id}
                  className="font-medium text-white md:text-[19px] sm:text-[18px] text-[16px]"
                >
                  {modalservice.service}
                </li>
              </ul>
            ))}
            <button
              className={`py-2 sm:py-4 mt-12 sm:mt-4 w-[130px] sm:w-[150px] md:w-[200px] md:mt-[20px] px-[30px] bg-[#A020F0] font-medium text-[16px] sm:text-[18px] text-white rounded-[20px] btn1`}
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
